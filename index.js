// Your code here
class Polygon {
    
    constructor(array){
        this.array = array
    }

    get getCount(){
        return this.array.length
    }

    get perimeter(){
        let result = 0
        this.array.map(i => {
            result += i
        })
        return result
    }
}

class Triangle extends Polygon {
    
    get isValid(){

        if (this.array[0] + this.array[1] > this.array[2]
            && this.array[0] + this.array[2] > this.array[1] 
            && this.array[1] + this.array[2] > this.array[0]){
                return true
            }
            else {
                return false
            }
    }
}

class Square extends Polygon {

    get isValid(){
        if ( this.array[0]=== this.array[1] &&
            this.array[1] === this.array[2] &&
            this.array[2] === this.array[3]){
                return true
            }
            else{
            return false
            }
    }

    get area(){
        return Math.pow(this.array[0], 2)
    }
}