function create_car(Manufacturer, Model, ...options){
let car = {
    Manufacturer : Manufacturer,
    Model : Model
};
options.forEach(option => {
    let [key, value] = option.split(":")
    car [key.trim()] = value.trim()
})
return car;
}

let my_car = create_car("Toyota", "Corolla", "Color: Grey", "Sunroof : True", "Year : 2020" )
console.log(my_car);
