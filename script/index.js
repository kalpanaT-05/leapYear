function isLeap(){
  const year = document.getElementById('year').value;

  if((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)){
    document.getElementById('leap_year').innerHTML = 'Is a Leap year';
  }

  else{
    document.getElementById('leap_year').innerHTML = 'Is not a Leap year';
  }
}
