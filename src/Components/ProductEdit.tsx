import React, { useState  , useEffect} from 'react'
// types
import { UpdateFieldType, FormStateType , ProductEditPropsType} from '../Types/CustomTypes';
// data
import { Foods } from '../Data/ProductsData';
// emotion css
import { css } from '@emotion/css';
// react router dom
import { useNavigate , useParams  , useLocation} from 'react-router-dom';

const ProductEdit: React.FC <ProductEditPropsType> = ({isEdit}) => {

    const navigate = useNavigate();
    const {id} = useParams();

    const [form, setForm] = useState<FormStateType>({
        id: '',
        name: '',
        price: 0,
        description: ''
    });
    
    useEffect(() => {
        if (!isEdit) {
            setForm({
                id: '',
                name: '',
                price: 0,
                description: ''
            })
        }
        
        if (id) {
            const food = Foods.filter(food => food.id === id);
            setForm({...food[0]})
        }
    }, [id])
    

    const updateField = ({ name, value }: UpdateFieldType) => {
        if (name === 'price' && Number.isNaN(value)) {
            setForm({
                ...form,
                price: 0
            })
        }

        else {
            setForm({
                ...form,
                [name]: value
            })
        }
    }

    const handlerCreate = () => {
        if (form.id && form.name && form.price && form.description) {
            Foods.push(form);
            navigate(`/admin`)
            setForm({
                id: '',
                name: '',
                price: 0,
                description: ''
            })
        }
    }

    const handleUpdate = () => {
        for (let i = 0; i < Foods.length; i++) {
            if (Foods[i].id === form.id) {
                window.alert(`You Update ${Foods[i].id} Product`)
              Foods[i] = { ...Foods[i], ...form };
              navigate('/admin');
              break; 
            }
        }
    }

    const handleDelete = () => {
        const deletedItem = Foods.find(food => food.id === form.id);
        if (deletedItem) {
            if (!window.confirm(`Are You Sure To Delete ${deletedItem.id}`)) {
                return;
            }
            Foods.splice(Foods.indexOf(deletedItem) , 1);
            navigate('/admin');
        }
    }

    return (
        <form className={ProductEditStyles}>
            <input type="text"
                name="id"
                value={form.id}
                placeholder="ID"
                className="ProductEdit-Input"
                onChange={({ target }) => updateField(target)} />
            <input type="text"
                name="name"
                value={form.name}
                placeholder="NAME"
                className="ProductEdit-Input"
                onChange={({ target }) => updateField(target)} />
            <input type="text"
                name="price"
                value={String(form.price)}
                placeholder="PRICE"
                className="ProductEdit-Input"
                onChange={({ target }) => updateField({ name: target.name, value: parseInt(target.value) })} />
            <textarea name="description"
                value={form.description}
                placeholder="DESCRIPTION"
                className="ProductEdit-Input ProductEdit-Textarea"
                onChange={({ target }) => updateField(target)} />
            <div style = {{display: 'flex' , justifyContent: 'space-between' , marginTop: '10px'}}>
                {!isEdit && 
                    <button type="button"
                        className="ProductEdit-Button"
                        onClick={handlerCreate}>
                        CREATE
                    </button>
                }
                {isEdit && 
                    <button type="button"
                        className="ProductEdit-Button"
                        onClick={handleUpdate}>
                        UPDATE
                    </button>
                }
                {isEdit && 
                    <button type="button"
                        className="ProductEdit-Button"
                        onClick={handleDelete}>
                        DELETE
                    </button>
                }
            </div>
        </form>
    )
}

const ProductEditStyles = css`
    color: #fff;
    background-color: #2a2c37;
    border-radius: 6px;
    padding: 15px;

    .ProductEdit {
        &-Input {
            width: 100%;
            border: 1px solid transparent;
            color: #fff;
            background: #1d1e26;
            padding: 10px 15px;
            margin-bottom: 5px;
            border-radius: 6px;
            outline: 0;
            &:focus {
              border-color: #50fa7b;
            }
          }
          &-Textarea {
            min-height: 80px;
            resize: none;
          }
          &-Button {
            border: 2px solid #50fa7b;
            color: #50fa7b;
            background: none;
            padding: 15px 10px;
            border-radius: 6px;
            outline: 0;
            cursor: pointer;
            font-weight: 600;
            text-transform: uppercase;
          }
    }
`

export default ProductEdit;