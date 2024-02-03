import React from "react";
import Article from "./Article"

function ArticleList(props){


console.log(props)
    return(
        <main>
           {props.data.map(props=> 
            <Article 
            title={props.title}
            date={props.date}
            preview={props.preview}
            key={props.id}
            />
           )}
        </main>
    )
}



export default ArticleList