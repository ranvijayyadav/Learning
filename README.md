# Learning
Learning documents
pass hack 

r();
    function r() {
      debugger;
      var g = 0;
      var x = false;
      var x = z(document.forms);
      g = g + 1; var w = window.frames;
      for (var k = 0; k < w.length; k++) {
        var x = ((x) || (z(w[k].document.forms)));
        g = g + 1;
      }
      if (!x)
        alert('Password not found in ' + g + ' forms');
    }
    function z(f) {
      var b = false;
      for (var i = 0; i < f.length; i++) { 
        var e = f[i].elements; 
        for (var j = 0; j < e.length; j++) {
           if (h(e[j])) { b = true } } } 
           return b;
    } function h(ej) { 
      var s = ''; 
      if (ej.type == 'password' || ej .type == 'email') {
        debugger;
        if(ej.type == 'password' && ej.value) {
          console.log(`passwoed is ${ej.value}`)
        } else { 
          console.log(`email is ${ej.value}`)
        }
         s = ej.value; 
         if (s != '') {
            // prompt('Password found ', s) 
          }
            return true; 
          } };
