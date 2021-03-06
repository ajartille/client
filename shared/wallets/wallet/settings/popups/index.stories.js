// @flow
import * as React from 'react'
import * as Sb from '../../../../stories/storybook'
import RemoveAccountPopup from './remove-account'
import ReallyRemoveAccountPopup from './really-remove-account'
import SetDefaultAccountPopup from './set-default'

const warningProps = {
  balance: '0.00 XLM',
  name: 'awesome account',
  onClose: Sb.action('onClose'),
  onDelete: Sb.action('onDelete'),
}

const reallyProps = {
  name: 'awesome account',
  loading: false,
  waiting: false,
  onCancel: Sb.action('onCancel'),
  onFinish: Sb.action('onFinish'),
  onCopyKey: Sb.action('onCopyKey'),
  onLoadSecretKey: Sb.action('onLoadSecretKey'),
}

const load = () => {
  Sb.storiesOf('Wallets/Wallet/Settings/Popups', module)
    .add('Remove account', () => <RemoveAccountPopup {...warningProps} />)
    .add('Remove account (long name)', () => (
      <RemoveAccountPopup {...warningProps} name="GA55UT7Z63R7WU2U26WMC6NZKH3AOWJWNTQQQHWDZRCWUQPXHBTDCD72" />
    ))
    .add('Really remove account', () => <ReallyRemoveAccountPopup {...reallyProps} />)
    .add('Really remove account (Loading)', () => (
      <ReallyRemoveAccountPopup {...reallyProps} loading={true} />
    ))
    .add('Really remove account (long name)', () => (
      <ReallyRemoveAccountPopup
        {...reallyProps}
        name="GA55UT7Z63R7WU2U26WMC6NZKH3AOWJWNTQQQHWDZRCWUQPXHBTDCD72"
      />
    ))
    .add('Set as default popup', () => (
      <SetDefaultAccountPopup
        accountName="Second account"
        onAccept={Sb.action('onAccept')}
        onClose={Sb.action('onClose')}
        username="cecileb"
        waiting={false}
      />
    ))
}

export default load
