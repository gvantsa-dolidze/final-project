import Button from "../elements/Button"

const StartShopping = () => {
  return (
    <div className="flex justify-center py-16">
            <div className="flex flex-col w-96 justify-center items-center gap-5">
                <img src="/img/empty_state.png" alt="" className="w-20"/>
                <p>Your order history is waiting to be filled.</p>
                <div>
                    <Button label='Start Shopping' />
                </div>
            </div>
        </div>
  )
}

export default StartShopping