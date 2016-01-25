describe ("Place", function() {
  it("weqsfg", function(){
    var testPlace = new Place("input1", "input2", "input3");
    expect(testPlace.city).to.equal("input1");
    expect(testPlace.landmark).to.equal("input2");
    expect(testPlace.president).to.equal("input3");
  });


  it("adds the destination", function() {
    var testPlace = new Place("input1", "input2", "input3");
    expect(testPlace.fullPlace()).to.equal("input1, input2, input3");
  });
});
