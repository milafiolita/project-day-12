window.action="menuFibonacci";

    // buat window.action dimana window action itu adalah menuFibonacci, jadi setiap reload web akan mengarah ke menu fibonacci.
    document.getElementById("fibonacci").classList.add("text-white", "border-l", "border-t", "border-r", "rounded-t");
    document.getElementById("fpb").classList.add("text-black", "hover:text-blue-lightest");

    // lalu aku membuat function fibonacci dimana isinya berupa window action yang berisi menuFibonacci dan setiap klik link fibonacci aku akan menghilang kan isi dari field number dan answer agar tidak bentrok ketika pengguna pindah link dan aku menghapus class aktif di fibonacci ataupun di fpb lalu aku menambahkan lagi classnya
    // semuanya aku hapus dan aku tambah karena setiap reload atau pindah link agar tidak terjadi bentrok
    function fibonacci() {
        window.action = "menuFibonacci";
        document.getElementById('number').value="";
        document.getElementById('answer').value="";
        document.getElementById("fibonacci").classList.remove("text-white", "border-l", "border-t", "border-r", "rounded-t","text-black", "hover:text-blue-lightest");
        document.getElementById("fpb").classList.remove("text-white", "border-l", "border-t", "border-r", "rounded-t","text-black", "hover:text-blue-lightest");
        document.getElementById("fibonacci").classList.add("text-white", "border-l", "border-t", "border-r", "rounded-t");
        document.getElementById("fpb").classList.add("text-black", "hover:text-blue-lightest");
    }
    function largestPrimeFactor() {
        window.action = "menuLargestPrimeFactor";
        document.getElementById('number').value="";
        document.getElementById('answer').value="";
        document.getElementById("fibonacci").classList.remove("text-white", "border-l", "border-t", "border-r", "rounded-t","text-black", "hover:text-blue-lightest");
        document.getElementById("fpb").classList.remove("text-white", "border-l", "border-t", "border-r", "rounded-t","text-black", "hover:text-blue-lightest");
        document.getElementById("fibonacci").classList.add("text-black", "hover:text-blue-lightest");
        document.getElementById("fpb").classList.add("text-white", "border-l", "border-t", "border-r", "rounded-t");

    }

    // disini proses dan hasil penghitungan nanti
    // dan disini terlihat fungsi dari window action tadi
    // jadi jika window action == menuFibonacci maka yang akan menghitung number masuk adalah rumus fibonacci
    // sebaliknya seperti itu jika window action == menuLargestPrimeFactor maka yang akan menghitung number masuk adalah rumus LargestPrimeFactor
    function hitung() {
        var number = document.getElementById('number').value;
        var aksi = window.action;
        if (aksi == "menuFibonacci") {
             var fibno = [ 1, 2 ], sum = [];

             function cal(arr)
              {
               return arr[ arr.length - 1] + arr[ arr.length - 2];
              }
              while ( fibno[ fibno.length - 1 ] < number )
              {
                fibno.push( cal(fibno) );
              }
                fibno.forEach( function(n) 
              {
              if ( n % 2 === 0 )
              {
                sum.push(n);
              }
            })
          document.getElementById('answer').value = "The answer is : " + sum;
        }
        else if (aksi == "menuLargestPrimeFactor") {
          var primes = [];
          var prime_init = 2;
          
          while (number > 1) {
            var check = number % prime_init;
            
            while(check == 0) {
              primes.push(prime_init);
              number /= prime_init;
              check = number % prime_init;
            }
            prime_init++; 
          }
          
          var hasil = Math.max.apply(null,primes)
          document.getElementById('answer').value = "The answer is : " + hasil;
        }
        else{
            return false;
        }
    }