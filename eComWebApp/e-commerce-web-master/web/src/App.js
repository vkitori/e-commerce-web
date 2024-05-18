import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      items: [
        { 
            "id": 1, 
            "title": "Modern Sofa",  
            "img": "sofa.jpg", 
            "desc": "A comfortable and stylish modern sofa.", 
            "category": "Living Room", 
            "price": "499.99"
        },
        { 
            "id": 2, 
            "title": "Dining Table",  
            "img": "dining_table.jpg", 
            "desc": "A spacious dining table made of oak wood.", 
            "category": "Dining Room", 
            "price": "349.99"
        },
        { 
            "id": 3, 
            "title": "Office Chair",  
            "img": "office_chair.jpg", 
            "desc": "Ergonomic office chair with lumbar support.", 
            "category": "Office", 
            "price": "199.99"
        },
        { 
            "id": 4, 
            "title": "Queen Bed",  
            "img": "bed_queen.jpg", 
            "desc": "Sturdy queen bed frame with a minimalist design.", 
            "category": "Bedroom", 
            "price": "299.99"
        },
        { 
            "id": 5, 
            "title": "Bookshelf",  
            "img": "bookshelf.jpg", 
            "desc": "Tall bookshelf with five spacious shelves.", 
            "category": "Living Room", 
            "price": "149.99"
        },
        { 
            "id": 6, 
            "title": "Recliner",  
            "img": "recliner.jpg", 
            "desc": "Comfortable recliner with adjustable positions.", 
            "category": "Living Room", 
            "price": "399.99"
        },
        { 
            "id": 7, 
            "title": "Coffee Table",  
            "img": "coffee_table.jpg", 
            "desc": "Elegant coffee table with a glass top.", 
            "category": "Living Room", 
            "price": "99.99"
        },
        { 
            "id": 8, 
            "title": "Wardrobe",  
            "img": "wardrobe.jpg", 
            "desc": "Spacious wardrobe with sliding doors.", 
            "category": "Bedroom", 
            "price": "599.99"
        },
        { 
            "id": 9, 
            "title": "Nightstand",  
            "img": "nightstand.jpg", 
            "desc": "Compact nightstand with a drawer and shelf.", 
            "category": "Bedroom", 
            "price": "79.99"
        },
        { 
            "id": 10, 
            "title": "Bar Stool",  
            "img": "bar_stool.jpg", 
            "desc": "Stylish bar stool with adjustable height.", 
            "category": "Kitchen", 
            "price": "59.99"
        }
    ]
    }
  }

  render() {
  return (
    <div className="wrapper">
      <Header />
      <Items items= {this.state.items}/>
      <Footer />
    </div>

  );
}
}

export default App;
