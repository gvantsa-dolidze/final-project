import Button from '../elements/Button'

const SuccessfulOrder = () => {
  return (
    <div className='p-32'>
        <div className='flex flex-col gap-10 items-center'>
            <img src="/img/Frame.png" alt="box" />
            <h3>Thank you for shopping</h3>
            <p>Your order has been successfully placed and is now being processed.</p>
            <Button label="Go to my account" />
        </div>
    </div>
  )
}

export default SuccessfulOrder