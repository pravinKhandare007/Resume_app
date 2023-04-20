// fetch('./Data.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// const fetchData = async () => {
//     const response = await fetch('./Data.json');
//     const data = await response.json(); 
//     console.log(data);

// }


// let data = fetchData(); //got data as a promise ?
// console.log(data);

// console.log(typeof data); //object

// console.log(data.resume);

let Id = 0;
const data = fetch('./data.json')
                .then((response) => response.json())
                .then((json) => {return json});

//the data promise is resolved so we can use "then" method/function ? on it to manipulate data

function printData(){
    data.then( function(result){
        console.log(result);
    })
};

//printData();

function writeDataIntoIndexhtml(id){
    data.then(function(result){
        document.getElementById("name").innerText = result.resume[id].basics.name;
        document.getElementById("postion").innerText = result.resume[id].basics.AppliedFor;
        document.getElementById("phone-number").innerText = result.resume[id].basics.phone;
        document.getElementById("gmail").innerText = result.resume[id].basics.email;
        document.getElementById("linkedin").innerText = result.resume[id].basics.profiles.url;
        

        //inserting techinacal skills array
        let skillsArray = result.resume[id].skills.keywords;
        let str = skillsArray.join('<br>');
        let templateString = `<p>  ${str} </p>`;
        document.getElementById("skills").innerHTML = templateString;

        //now inserting hobbies the same way
        let hobbiesArray = result.resume[id].interests.hobbies;
        let hobbiesString = hobbiesArray.join('<br>');
        let hobbiesInnerHtml = `<p> ${hobbiesString} </p>`
        document.getElementById("hobbies").innerHTML = hobbiesInnerHtml;

        //starting to fill part-2
        document.getElementById("company-name").innerText = result.resume[id].work["Company Name"];
        document.getElementById("position").innerText = result.resume[id].work.Position;
        document.getElementById("start-date").innerText = result.resume[id].work["Start Date"];
        document.getElementById("end-date").innerText = result.resume[id].work["End Date"];
        document.getElementById("summary").innerText = result.resume[id].work.Summary;

        //filling Projects
        document.getElementById("project-name").innerText = result.resume[id].projects.name;
        document.getElementById("project-description").innerText = result.resume[id].projects.description;

        //education
        let UgObject = document.getElementById("UG").innerText = result.resume[id].education.UG;
        console.log(UgObject);

        for(let i = 0; i < UgObject.length; i++ ){
            let str2 = UgObject[i];
            console.log(str2);
        };
        
        // UgObject.forEach(element => {
        //     console.log(element);
        //     //  let str1 = '';
        //     //  str1.concat(UgObject.element)
        //  });

        document.getElementById("SS").innerText = result.resume[id].education["Senior Secondary"];
        //remaing to concat 

        document.getElementById("SS").innerText = result.resume[id].education["Senior Secondary"];
        //one ecducation remaing

        document.getElementById("internship-company-name").innerText = result.resume[id].Internship["Company Name"];
        document.getElementById("internship-position").innerText = result.resume[id].Internship["Position"];
        document.getElementById("internship-start-date").innerText = result.resume[id].Internship["Start Date"];
        document.getElementById("internship-end-date").innerText = result.resume[id].Internship["End Date"];
        document.getElementById("internship-summary").innerText = result.resume[id].Internship["Summary"];

        //achievemetns
        document.getElementById("achievement-summary").innerText = result.resume[id].achievements.Summary;
        console.log("inside the then function")
        console.log(id);
    })
    console.log("outside the then function")
    console.log(id);
};

writeDataIntoIndexhtml(Id);
