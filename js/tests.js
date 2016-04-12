QUnit.module("Color Change", function() {
  //COLORS ARRAY
    test("colors array", function() {
    ok(typeof colors !== "undefined", "Colors variable is properly defined.");
    ok(Object.prototype.toString.call(colors) === '[object Array]',"Colors is a valid array");
    ok(colors.length >= 4, "Colors array has at least 4 items");
    
    var check = 0;
    for(var i = 0;i<colors.length;i++){
      if(typeof colors[i] != 'string'){
        check++;
      }
    }
    
    ok(check === 0 && colors.length > 0, "All items in the colors array are strings");
    
    expect(4);
  });
  
    //CHANGE COLOR
  test("changeColor()", function(){
    ok(typeof changeColor !== "undefined", "changeColor() is properly defined.");
    expect(1);
  });

  //ADD COLOR
  test("addColor()", function() {
    ok(typeof addColor !== "undefined", "addColor() is properly defined.");
    
    var currLength = colors.length;
    
    addColor();
    ok( colors.length > currLength, "addColor() adds an item to the colors array" );
    expect(2);
  });


});
