function get_self_ip(){
    var ip = location.href.split('/')[2];
    alert(ip);
}
console.log(get_self_ip());