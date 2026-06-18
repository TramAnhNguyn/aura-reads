import { useState } from 'react';
import { BagContext } from './BagContextDefinition';

export function BagProvider({ children }) {
    const [bagItems, setBagItems] = useState([]);

    const addToBag = (book) => {
        const existingItem = bagItems.find(item => item.id === book.id);
        
        if (existingItem) {
            setBagItems(bagItems.map(item =>
                item.id === book.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setBagItems([...bagItems, { ...book, quantity: 1 }]);
        }
    };

    const removeBag = (id) => {
        setBagItems(bagItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeBag(id);
        } else {
            setBagItems(bagItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            ));
        }
    };

    const getTotalItems = () => {
        return bagItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return bagItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <BagContext.Provider value={{
            bagItems,
            addToBag,
            removeBag,
            updateQuantity,
            getTotalItems,
            getTotalPrice
        }}>
            {children}
        </BagContext.Provider>
    );
}
