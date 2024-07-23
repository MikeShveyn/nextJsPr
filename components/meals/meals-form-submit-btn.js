'use client'

import {useFormStatus} from 'react-dom'

export default function MealsFormSubmitBtn() {
    const {pending} = useFormStatus()
    return <button disabled={pending}>
        {pending ? 'Submittimg...' : 'Share Meal'}
    </button>
}