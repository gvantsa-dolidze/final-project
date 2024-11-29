import LinkBtn from '../elements/LinkBtn'

const SuccessfulOrder = () => {
  return (
    <div className='p-20'>
        <div className='flex flex-col gap-10 items-center'>
            <img src="/img/Frame.png" alt="box" />
            <h3>Thank you for shopping</h3>
            <p>Your order has been successfully placed and is now being processed.</p>
            <LinkBtn label="Go to my account" destination='/profile_page'/>
        </div>
    </div>
  )
}

export default SuccessfulOrder