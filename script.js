  
      jQuery("#signinform").validate({

        rules:{
            passwordAndEmail:{
                required:true,
                minlength:6,
                email:true
            },

            password:{
                required:true,
                minlength:8,
            }
        },
        messages:{
            passwordAndEmail:{
                required:"enter email address",
            }
            
        }
})
