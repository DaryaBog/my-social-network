import classes from './Messages.module.css'
import React from 'react'
import Message from './Massege/Message'

const Messages = (props) => {

    const text1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, autem deleniti. Mollitia modi sunt repellat ut ipsum, deleniti, neque corporis fugiat porro assumenda facilis optio commodi dolorum? Aperiam nisi temporibus possimus assumenda architecto amet consequatur perspiciatis dolorum quaerat nulla facilis deleniti, eos nemo ad vero tempore autem vel earum non, veritatis itaque quisquam at iste. Amet eum possimus quibusdam hic laboriosam nesciunt adipisci debitis voluptatum illum nobis dolores, iusto incidunt autem aspernatur suscipit. Architecto, eius? Expedita, illo molestiae. Porro earum modi a ipsam incidunt perferendis debitis explicabo ex laudantium consectetur obcaecati aspernatur quaerat odit commodi, delectus repudiandae dignissimos dicta itaque ab maxime optio. Porro rem magnam excepturi alias magni perspiciatis iure repellat, earum pariatur adipisci tempora sed voluptatibus, explicabo ipsum dolores et culpa ipsa, itaque iste. Praesentium ad sequi non, animi culpa iure est illum ipsum velit officiis obcaecati, quasi perferendis mollitia! Cum illo modi veritatis expedita perspiciatis perferendis neque quis labore distinctio reiciendis eius, quasi omnis. Laborum mollitia quo est deleniti recusandae amet cupiditate cumque, officiis maxime aspernatur pariatur dolore nihil nemo quia magnam ab esse soluta quaerat. Esse architecto iste illum cum officiis corrupti enim reprehenderit sint accusamus perferendis quos, nam suscipit, alias quae id qui molestias, ullam illo? Culpa, officia fugiat sapiente tempore debitis, ad distinctio qui rem magni omnis, adipisci labore natus et tempora quisquam totam. Totam est temporibus dicta impedit numquam officia blanditiis maxime, culpa harum illo repellendus reiciendis? Laborum, nulla? In iste autem ipsum quam dicta adipisci sunt aperiam, nihil non aut commodi impedit, eos natus vitae cupiditate vero quo accusantium quis voluptas minus consequuntur aliquam! Alias ratione ad blanditiis, nulla repellat facere velit neque repudiandae veniam sequi vitae doloremque quod quos sapiente labore nam? Vel obcaecati ullam commodi illo delectus magni nesciunt reprehenderit consequatur natus unde sapiente, temporibus cum sunt esse itaque iste.'
    const text2 = 'loremsdfghjkl.,mnbvdrcfgvbhunpijnjpnkj;n'

    return (
        <div className={classes.Messages}>
            <Message text={text1} />
            <Message text={text2} />
        </div>
    )
}

export default Messages