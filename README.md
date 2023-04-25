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
- create recipe: InputGroup (price), EditorModule (desc)
- set debounce for btn, multi-lang
- rating star decimal: https://codepen.io/scottb/pen/KdYgRK
- slider, sticky nav, order list restyle

## Pending features

| Feature     |           Note           |     Status     |
| ----------- | :----------------------: | :------------: |
| Lazy module |       more routing       | `Pending Last` |
| Test case   |         spec.ts          | `Pending Last` |
| Email magic | forgot pass, remember me |   `Pending`    |
| More        |                          |  `Processing`  |
| Admin role  |                          | `Pending Last` |

### Other:

- Color Pallete:
  > Light: #F5F5F5 | #e5e9ea | aliceblue
  > Dark: #000 | #333
  > Other variant (hot -> cold): #f8d095 > #e19f49 > #8d4821 > #452a19
- Failed Consideration: sticky nav
