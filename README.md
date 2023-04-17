# Frontend

This project install additionally:

- bootstrap v5.2.3 [npm i bootstrap@v5.2.3]
- font awesome v3.1.2
- folder [extra_img](src/assets/Extra_img/)

## Functionally

- Login, Register, Authentication (Admin - User)
- (HomePage)

## Note

- Flow: pick food -> cart -> order page -> order confirmation (admin comfirm order's status)
- Order page: valiate (address, food amount > 0), address & time set locally
- Message pop-up for each request/action [Prime Component](https://primeng.org/toast)
- Toast service outside/common
- skeleton: spinner (at minimum)
- register.html - ngif validator['notSame'] ('PasswordsMatchValidator') didnt display
- multi-lang, food detail
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
