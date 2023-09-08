function DessertsList(props) {
  const desserts = [
               {key:1,name:"ice cream",cal:200},
               {key:2,name:"Tiramisu",cal:300},
               {key:3,name:"Chocolate Cake",cal:400}
]
  return (
      <ul>
      {
       desserts.map(desser => {return(
           <li>{desser.name} - {desser.cal} cal</li>
)})
      }
      </ul>

);
}

export default DessertsList;
