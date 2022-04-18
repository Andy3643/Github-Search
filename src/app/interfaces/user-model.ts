export class UserModel {
    constructor(
        public login: string, 
        public avatar_url: string="", 
        public url: string,
        public public_repos:number,
        public followers: number,
        public following: number
        ){}

}
