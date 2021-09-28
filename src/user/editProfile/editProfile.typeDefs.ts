import {gql} from "apollo-server";

export default gql`
    type Mutation{
        editProfile(id:Int! username:String, email:String, password:String):MutationResponse!
    }
`;