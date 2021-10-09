$(document).ready(function(){
    $(function(){    
   $("#button-1").on("click",function(e){
       e.preventDefault(); // if this function  is called the action method is not triggred
       const rollno=$("#rollno").val(); // store value of rollno
       const name= $("#name").val(); // store value of name
       const marks=$("#marks").val(); // store value of marks

       if((rollno=='') || (name==='') || (marks==='')){ // if true then alert msg show
           alert("Please fill  all the fields");
       }
       else{ 
           // otherwise else will run 
           // in else we create appendText var which store rollno,marks and name
          var appendText="<p> RollNo- <b>&nbsp;"+ rollno+ "&nbsp; </b> , <b>&nbsp;"+ name+"&nbsp;</b> have got <b> &nbsp;"+marks+" </b> marks</p>";
          // span part this rollno,marks and name append with span
          $("#output-details").append(appendText);
          $("#rollno").val("");
          $("#name").val("");
          $("marks").val("");
       }
   });
});
});