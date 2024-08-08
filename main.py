class Invoice:
    def __init__(self, business_name, address, email, phone):
        self.business_name = business_name
        self.address = address
        self.email = email
        self.phone = phone
        self.items = []

    def add_item(self, description, quantity, unit_price):
        self.items.append({
            'description': description,
            'quantity': quantity,
            'unit_price': unit_price
        })

    def generate_invoice(self):
        invoice_template = f"""
        {self.business_name}
        {self.address}
        Email: {self.email}
        Phone: {self.phone}

        Invoice:
        -----------------------------------------
        Description     | Quantity | Unit Price
        -----------------------------------------
        """
        for item in self.items:
            invoice_template += f"{item['description']:<16} | {item['quantity']:<9} | ${item['unit_price']:.2f}\n"
