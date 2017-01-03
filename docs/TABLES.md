# Inventory management Tables


1- Template

id: UUID
name: STRING
photos: SET <UUID>
decription: STRING
colors: SET <STRING>
price_retail: FLOAT
category: STRING
sub_category: STRING

2- Product

id: UUID
template: UUID
color: STRING
price_bought: NUMBER
price_sold: NUMBER
date_purchased: DATE
date_sold: DATE