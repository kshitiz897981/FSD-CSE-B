import config from "../config/config";
import {Client,Account,ID} from "appwrite"

export class AuthService{
    client=new Client(); /*we are not giving endpoint and projectId to client bez we want these to be given when 
                           the object of AuthService is created so we will make a constructor for this bez constructors
                            are called by default when object is created*/
    account;             //this is just a variable for account , we will be making account inside constructor bez of same reason//

    constructor(){
        this.client
                   .setEndpoint(config.appwriteUrl)
                   .setProject(config.appwriteProjectId);
        this.account=new Account(this.client)   ;        
    }

    //createAccount returns a user object containing basic info about new user//
    async createAccount({email,password,name}){ //it is a promise so used with async amd it can also fail,so use try-catch//
         try{
           const userAccount=await this.account.create(ID.unique(),email,password,name)    //it is compulsory to give"userID" as first argument(read in documents of appwrite )//
           if(userAccount){
            //if userAccount exists then make him login, so here login method is called//
             return this.login({email,password});
           }
        else return userAccount
        }
         catch(error){
            throw error;
         }
    }

    //returns a session//
    async login({email,password}){
        try{
           return await this.account.createEmailPasswordSession(email,password)
        }
        catch(error){
          throw error;
        }
    }

    async getCurrentUser(){ //to see if the user is logged in or not,it returns a "user" object if user is logged in//
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUSer :: error",error)
        }
        return null;//if users account is not found,then return null//
    }

    async logOut(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logOut :: error",error)
        }
    }
}

const authService = new AuthService(); //object of class AuthService//

export default authService //export the object//