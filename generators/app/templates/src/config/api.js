class API{

    constructor(){
        this.host = "http://172.18.69.54:9090"
    }

    login(){
        return this.host+"/login";
    }

}

export {
    API
}