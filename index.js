class Polygon {
  constructor(sideArr) {
    this.sideArr = sideArr
this.count = this.sideArr.length
  }

  get getCount() {
    return this.sideArr.length
  }

  get perimeter() {
    let sum = 0
    for (var item of this.sideArr) {
      sum += item
    }
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {

      if ( this.count !== 3 ) return;
      let side1 = this.sideArr[ 0 ]
      let side2 = this.sideArr[ 1 ]
      let side3 = this.sideArr[ 2 ]
      return ( ( side1 === side2 ) && ( side1 === side3 ) && ( side2 === side3 ) )
    }
}

class Square extends Polygon {
  get isValid() {
    if ( this.count !== 4 ) return;
    let side1 = this.sideArr[ 0 ]
    let side2 = this.sideArr[ 1 ]
    let side3 = this.sideArr[ 2 ]
    let side4 = this.sideArr[ 3 ]
    return ( ( side1 === side2 ) && ( side1 === side3 ) && ( side1 === side4 ) )
  }


  get area() {
    return this.sideArr[ 0 ] * this.sideArr[ 0 ]
  }
}
