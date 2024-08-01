
export const GiftItem = ({title, url}) => {

    console.log(title, url)
  return (
    <>
    <div className='card'>
        <img className="image" src={url} alt={title} />
        <p>{title}</p>
    </div>
    </>
  )
}
