
function SubmitForm()
{
   //Access the IFrame holder
    let iHolder = document.getElementById("IFrameHolder");


        //Using a loop to iterate the data depending on the number of times you wish to submit the data
        //Change the 3 to the number of iterations you wish
        for (var i = 0; i < 3; i++) {

        //Add IFrames to the IFrames html div (The iframes will be created depending on the number of iterations)
         iHolder.innerHTML =  iHolder.innerHTML +  `<iframe name='frame${i}'></iframe> `;
         //End of creating dynamic IFrames


        
       //Pass form to  multiple scripts named action1.php, action2.php......... or you can pass to 1 script but multiple times
        document.forms['contactus'].action='action'+(i+1)+'.php';
        //Iterate through the IFrames
        document.forms['contactus'].target= 'frame'+(i+1);
        //Submits the form to the script
        document.forms['contactus'].submit();


        ///---------------End of muli-submitting script ----------------------------//



        //-------------------------- Just Incase you need to use the form data else ignore this part ----------/
         //Here I have fetched the data from the form and saved it to the data variable just incase you need it
         let data = Object.fromEntries(new FormData(document.querySelector('form')).entries());
         //I have logged the data variable for you to view the form data
         //This is purely for test and visualization purposes
         console.log(data);
         //To get the specific form data from the variable for instance
         // data['phone'] to get phone form value just add the ['phone']  to the variable as shown this depends on the name of the html input <input type='text' name='phone' id='phone' maxlength="15" />
         console.log(data['phone']);

         /////------------------------End---------------------------//


        }
      

}

