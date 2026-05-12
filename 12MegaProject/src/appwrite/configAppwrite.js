import config from "../config/config";
import {Client,Account,ID,Storage,Databases,TablesDB,Query} from "appwrite"

export class Service{
    client=new Client();
    tablesDb;
    storage;

    constructor(){
           this.client
                   .setEndpoint(config.appwriteUrl)
                   .setProject(config.appwriteProjectId);
       this.tablesDb=new TablesDB(this.client);
        this.storage=new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
           return await this.tablesDb.createRow({
            databaseId:config.appwriteDatabaseId,
            tableId:config.appwriteCollectionId,
            rowId:slug,
            data:{
                title,
                content,
                featuredImage,
                status,
                userId
            }
           })
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error",error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
           try{
              return await this.tablesDb.updateRow(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status   
                }
              )
           }
           catch(error){
            console.log("Appwrite service :: updatePost :: error",error);
           }

    }

    async deletePost(slug){
          try{
              await this.tablesDb.deleteRow({
                databaseId:config.appwriteDatabaseId,
                tableId:config.appwriteCollectionId,
                rowId:slug
             })
             return true;
          }
          catch(error){
             console.log("Appwrite service :: deletePost :: error",error);
             return false;
          }
    }

    async getPost(slug){
        try{
           return await this.tablesDb.getRow({
            databaseId:config.appwriteDatabaseId,
            tableId:config.appwriteCollectionId,
            rowId:slug
           })
        }
        catch(error){
            console.log("Appwrite service :: getPost :: error",error);
            return false;
        }
    }

    //to get all posts whose status is active//
    async getPosts(queries=[Query.equal("status","active")]){ //to use query,you must have indexes or keys (here status)//
        try{
         return await this.tablesDb.listRows({
            databaseId:config.appwriteDatabaseId,
            tableId:config.appwriteCollectionId,
            queries
         })
        }
        catch(error){
            console.log("Appwrite service :: getPosts :: error",error);
            return false;
        }
    }

    //file upload service//

    async uploadFile(file){
        try{
           return await this.storage.createFile({
            bucketId: config.appwriteBucketId,
            fileId:ID.unique(),
            file:file
           }
        
           )
        }
        catch(error){
            console.log("Appwrite service :: uploadFile :: error",error);
            return false;
        }
    }

      async deleteFile(fileId){
        try{
            await this.storage.deleteFile({
            bucketId: config.appwriteBucketId,
            fileId:fileId,
           })
           return true    
        }
        catch(error){
            console.log("Appwrite service :: deleteFile :: error",error);
            return false;
        }
    }

    //returns a utl which is used in Postcard//
    getFilePreview(fileId){
        this.storage.getFilePreview({
            bucketId:config.appwriteBucketId,
            fileId:fileId
        })
        
    }
}

const service=new Service();

export default service