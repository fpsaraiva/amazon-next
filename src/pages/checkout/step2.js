import React from 'react';

import CheckoutLayout from '~/layout/Checkout';
import ApplicationLayout from '~/layout';

export default function CheckoutSecondStep() {
    return (
        <ApplicationLayout>
            <CheckoutLayout step={{ order: 2, title: 'Shipping Info' }} />
        </ApplicationLayout>
    );
}