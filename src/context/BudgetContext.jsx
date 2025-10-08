
import { createContext, useContext, useState } from 'react';

// 1. Crea l'oggetto Context con un valore predefinito
const BudgetContext = createContext(null);

// 2. Componente Provider (che gestisce lo stato)
export function BudgetProvider({ children }) {
    const [budget, setBudget] = useState(false); // Lo stato da condividere

    const toggleBudget = () => {
        setBudget(prevBudget => (prevBudget === false ? true : false));
    };

    // 3. Il valore che sarà accessibile a tutti i consumatori
    const value = { budget, toggleBudget };

    return (
        <BudgetContext.Provider value={value}>
            {children}
        </BudgetContext.Provider>
    );
}

// 4. Hook personalizzato per consumare il Context
export const useBudget = () => {
    return useContext(BudgetContext);
};