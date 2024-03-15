import style from "./About.module.css";

const About = () => {
    return (
        <div className={style.container}>

         <div className={style.imgContainer}>
         </div>

         <div>
         <h2 className={style.name}>Diego Chinchay</h2>
         </div>
         
            <div className={style.descriptionContainer}>
                <h2>From: <span>Peru</span></h2>
                <h2>Age: <span>37</span></h2>
                <h2>Hobbies: <span>Videogames</span></h2>
                <h2>Status: <span>In a relationship</span></h2>   
            </div>        
      </div>
    )

}

export default About