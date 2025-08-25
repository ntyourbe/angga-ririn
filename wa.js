
    const form = document.getElementById('myForm'); 
 
    form.addEventListener('submit', function(event) { 
      event.preventDefault(); // Prevent form submission 
 
      // Get form values 
      const name = document.getElementById('name').value; 
      const message = document.getElementById('pesan').value; 
 
      // Format data for WhatsApp URL 
      const formattedName = encodeURIComponent(name); 
      const formattedMessage = encodeURIComponent(message); 
       
      // Build WhatsApp URL 
      const whatsappUrl = `https://wa.me/+6289514031191?text=${formattedName}%0A${formattedMessage}`; 
 
      // Open WhatsApp URL 
      window.open(whatsappUrl); 
    }); 
  
