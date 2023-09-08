function DessertsList(props) {
  
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
