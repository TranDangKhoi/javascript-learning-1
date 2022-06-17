## Array.find, Array.findIndex
- Tìm 1 phần tử trong mảng mà khong tìm thấy thì sẽ trả về undefined

- Tìm 1 index của 1 phần tử mà không tìm thấy thì sẽ trả về -1

- Lọc mảng, mà mảng không có phần tử nào thỏa mãn điều kiện thì sẽ trả về mảng rỗng

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

const person = {
    personName : "Khoi",
    currentAge : 19
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

const user = {
    name: "Khoi",
    yearsOfExp: 3,
}

-> nếu ta dùng Object.entries(user) nó sẽ trả về -> [["name","Khoi"],["yearsOfExp",3]]

+ Object.values(object) -> trả về một mảng chứa tất cả các giá trị của object (tức là toàn bộ values của object)
+ Object.assign(firstObject, secondObject) -> Sao chép dữ liệu từ object này sang object khác
+ Object.freeze(object) -> Đóng băng object, không cho chỉnh sửa key và value của object
+ Object.seal(object) -> Cho phép chỉnh sửa key và value nhưng không đc thêm key và value mới


