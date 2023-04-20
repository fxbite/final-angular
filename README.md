# Frontend

This project install additionally:

- bootstrap v5.2.3 [npm i bootstrap@v5.2.3]
- font awesome v3.1.2
- folder [extra_img](src/assets/Extra_img/)

## Functionally

- Login, Register, Authentication (Admin? - User)
- (HomePage)
- Menu (filter by tag & input), Cart, Food Detail
- Other: User profile, toast, lazy loading
- Upcoming: Order, Order Confirm, CRUD

## Note

- Flow: pick food -> cart -> order page -> order confirmation (admin comfirm order's status)
- Order page: valiate (address, food amount > 0), address & time set locally
- register.html - ngif validator['notSame'] ('PasswordsMatchValidator') didnt display
- multi-lang
- create recipe: InputGroup (price), EditorModule (desc)
- set debounce for btn
- rating star decimal: https://codepen.io/scottb/pen/KdYgRK

## Pending features

| Feature     |           Note           |     Status     |
| ----------- | :----------------------: | :------------: |
| Lazy module |       more routing       | `Pending Last` |
| Test case   |         spec.ts          | `Pending Last` |
| Email magic | forgot pass, remember me |   `Pending`    |
| More        |                          |  `Processing`  |
| Admin role  |                          | `Pending Last` |

### Other:

- light: #F5F5F5 | #e5e9ea | aliceblue
- dark: #000 | #333
- other variant (hot -> cold): #f8d095 > #e19f49 > #8d4821 > #452a19
