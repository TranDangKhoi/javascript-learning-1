
<h1>Những thứ cần lưu ý trong quá trình học JS</h1>

## Array.find, Array.findIndex
- Tìm 1 phần tử trong mảng mà khong tìm thấy thì sẽ trả về undefined

- Tìm 1 index của 1 phần tử mà không tìm thấy thì sẽ trả về -1

- Lọc mảng, mà mảng không có phần tử nào thỏa mãn điều kiện thì sẽ trả về mảng rỗng

## Khái quát về By Values và By References
- Trong javascript có 5 kiểu dữ liệu nguyên thủy **"primitive types"**, đó chính là:
+ Number
+ String
+ boolean
+ Null
+ undefined
-> 5 Kiểu dữ liệu này được lưu trữ dưới dạng value : còn gọi là Giá trị.
VD:
var a = "Johny"<br/>
var b = a -> b đang là Johny<br/>
b = "Depp"<br/>
console.log('a',a)<br/>
console.log('b',b)<br/>
// Output :
Variables	Values<br/>
    a	    'Johny'<br/>
    b	    'Depp'<br/>

* VẬY -> Khi ta sao chép giá trị của biến này cho biến khác thì giá trị của 2 biến này hoàn toàn độc lập và không hề liên hệ gì đến với nhau.

Trong javascript có 3 kiểu dữ liệu tham chiếu **"Reference"**:
+ Function
+ Array
+ Object
- Gọi chung là kiểu dữ liệu **Object type**, vì nó không mang giá trị mà chỉ tham chiếu đến vùng lưu trữ của object đó trong bộ nhớ (tức là cả kể giá trị trong mảng, object có giống nhau ra sao, thì nó cũng sẽ không bao giờ = nhau, vì kiểu dữ liệu **Object type** chỉ so sánh vùng bộ nhớ lưu trữ), Reference sẽ không lưu giá trị được gán mà nó sẽ chỉ lưu địa chỉ đến đến giá trị của bộ nhớ. Ví dụ:

const arr1=['kendy','john'];

const arr2= arr1;<br/>
arr2[0]='tom';<br/>

console.log('arr1',arr1);<br/>

console.log('arr2',arr2);<br/>

//Output:
Variables	Values<br/>
   arr1	    <#001><br/>
   arr2	    <#001><br/>

## Spread Operator

- Spread Operator (...) có thể coi như là một thuật toán giúp lấy ra toàn bộ phần tử trong mảng array
- Spread Operator có rất nhiều tính năng giúp ích trong Javascript, có thể kể đến tiêu biểu nhất là:
+ Sao chép một mảng
+ Tách hoặc kết hợp một hay nhiều mảng
+ Sử dụng mảng như danh sách các argument
+ Thêm một item vào một list
+ Thao tác với state trong React
+ Kết hợp các objects
+ Chuyển NodeList thành một array

## Những thứ cần lưu ý về Object

- Object là gì ?
-> Object trong JavaScript là một khái niệm dùng để biểu diễn một vật cụ thể. Trong đó, các thuộc tính dùng để miêu tả đặc điểm, tính chất của đối tượng.

- Object bao gồm gì ?
-> Object bao gồm key và value, trong đó key là thuộc tính của vật thể đó, còn value là giá trị của thuộc tính
VD: Có một bạn tên là Khôi và hiện tại bạn ấy 19 tuổi thì ta có thể viết trong JS là:

const person = { <br/>
    personName : "Khoi",<br/>
    currentAge : 19<br/>
}

Ngoài ra ta cũng có thể dùng dấu - để biểu diễn key như sau: (Thường cách này ít khi được sử dụng)

const person = {
    person-name : "Khoi",
    current-age: 19
}

- Ngoài ra nói về object, ta cũng có một số các hàm cần học để hiểu sâu hơn về cách hoạt động với nó:
+ Object.keys() -> trả về một mảng chứa tất cả các keys của object 
+ Object.entries (object) -> Trả về một mảng nested
-> Giải thích dễ hiểu về nested thì nó sẽ gộp các giá trị trong object thành mảng array như sau:
VD ta có object:

const user = { <br/>
    name: "Khoi", <br/>
    yearsOfExp: 3, <br/>
}<br/>

-> nếu ta dùng Object.entries(user) nó sẽ trả về -> [["name","Khoi"],["yearsOfExp",3]]

+ Object.values(object) -> trả về một mảng chứa tất cả các giá trị của object (tức là toàn bộ values của object)
+ Object.assign(firstObject, secondObject) -> Sao chép dữ liệu từ object này sang object khác
+ Object.freeze(object) -> Đóng băng object, không cho chỉnh sửa key và value của object
+ Object.seal(object) -> Cho phép chỉnh sửa key và value nhưng không đc thêm key và value mới


