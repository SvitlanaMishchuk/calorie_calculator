import { AsideMenuItem } from "./AsideMenuItem"

export const Aside = () => {
    return <aside className="col-span-1">
        <ul>
            <AsideMenuItem label={'Mifflin St. Jeor Formula'} options={[{id: '1', label: 'Simplified Version' }, {id: '2', label: 'Full Version' }]}/>
            <AsideMenuItem label={'Harris-Benedict Formula'}/>
        </ul>
    </aside>
}