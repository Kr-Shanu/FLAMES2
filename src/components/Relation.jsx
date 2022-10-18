import React from "react";

function Relation(props){

    var name = props.name;
    var crush = props.crush;

    name = name.toLowerCase();
    crush = crush.toLowerCase();

    const name_arr = [];
    const crush_arr = [];

    for(var i = 0; i < name.length; i++){
        var ch = name.charAt(i);
        if(ch === ' ') continue;
        else name_arr.push(ch);
    }

    for(var j = 0; j < crush.length; j++){
        var ch2 = crush.charAt(j);
        if(ch2 === ' ') continue;
        else crush_arr.push(ch2);
    }

    for(var k = 0; k < name_arr.length; k++){

        for(var t = 0; t < crush_arr.length; t++){

            if(name_arr[k] === crush_arr[t]){
                crush_arr[t] = -1;
                name_arr[k] = -1;
                break;
            } 
        }
    }

    var len = 0;

    for(i = 0; i < name_arr.length; i++){
        if(name_arr[i]!==-1) len+=1;
    }

    for(i = 0; i < crush_arr.length; i++){
        if(crush_arr[i]!==-1) len+=1;
    }

    console.log("Arrays are :"+ name_arr);
    console.log("Arrays are :"+ crush_arr);
    console.log("Final length = "+ len);
    len = len<6?len-1:len%6;

    var relation = "";
    var link = "";

    if(len === 0) {relation="Friendship"; link = "https://media0.giphy.com/media/3ohzdPM43X326fUNnW/giphy.gif";}
    else if(len === 1) {relation="Lovers"; link = "https://i.pinimg.com/originals/31/15/98/31159803ceb30f8bc31edadccfeffe5f.gif";}
    else if(len === 2) {relation="Affectionate"; link = "https://media.tenor.com/z1-g6BDvFXUAAAAM/romance-romantic.gif";}
    else if(len === 3) {relation="Marriage"; link = "https://i.pinimg.com/originals/3a/78/7b/3a787b8a089c6c74da1a0fce6693f547.gif";}
    else if(len === 4) {relation="Enemies"; link = "https://thumbs.gfycat.com/BestFailingDobermanpinscher-max-1mb.gif";}
    else {relation="Siblings"; link = "http://blog-content.ixigo.com/wp-content/uploads/2016/07/4th.gif"}

    return(
        <div style={{textAlign:"center"}}>
        <h2 style={{paddingTop:"5%"}}>Result : {relation}</h2>
        <img alt="description" src={link} width="250px" height="250px"></img>
        </div>
    );
}

export default Relation;