import { useEffect, useState } from "react";

export const useUppercase = (initialValue) => {
    const transformed = initialValue.toUpperCase();
    const [value, setValue] = useState(transformed);

    const update = (newValue) => {
        setValue(newValue.toUpperCase());
    }

    useEffect(() => {
        setValue(initialValue.toUpperCase());
    }, [initialValue]);

    return { value, update }
}