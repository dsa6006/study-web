function change(num) {
    var x = document.form;
    var y = Number(x.count.value) + num;
    if(y<0)
        y=0;
    x.count.value = y;
}