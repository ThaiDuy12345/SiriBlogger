import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function MainBody() {
    const [weeklyPost, setWeeklyPost] = useState([
        { id:'8f0fde7040ba11edbdb02d263bee44ac', postTitle:'BẠN SẼ LÀ NHÂN VẬT PHẢN DIỆN TRONG CÂU CHUYỆN CỦA NGƯỜI KHÁC', image:'8f0fde7040ba11edbdb02d263bee44ac.png', numberOfViews: 189, category:'Tâm sự', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'8f5117b0406e11ed8bfdbbebc4a1c85d', postTitle:'THÁNH TÔNG DI THẢO (P.8) - BỨC THƯ CỦA CON MUỖI', image:'8f5117b0406e11ed8bfdbbebc4a1c85d.jpg', numberOfViews: 555, category:'Khoa hoạ - viễn tưởng', writter:'Duy Tiến', datePost:'01/10/2022'},
        { id:'88e63fe0409111ed9dc7e1a6d0776367', postTitle:'Đừng để cơ chế phòng ngự tâm lý làm hại bạn', image:'88e63fe0409111ed9dc7e1a6d0776367.png', numberOfViews: 15, category:'Sáng tạo', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'fde64de0409f11ed9f77e58e183d3527', postTitle:'Quầy bar vắng khách - Phần 1 - Lời chào', image:'fde64de0409f11ed9f77e58e183d3527.png', numberOfViews: 567, category:'Quan điểm - tranh luận', writter:'Duy Tiến', datePost:'01/10/2022'},
    ])
    const [monthlyPost, setMonthlyPost] = useState([
        { id:'71f7a2203a3711edbe2243b360f449e8', postTitle:'"KÉM", "LƯỜI", "DỐT" HAY KHUYẾT TẬT HỌC TẬP?', image:'71f7a2203a3711edbe2243b360f449e8.png', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'123f7d30407711ed8bfdbbebc4a1c85d', postTitle:'Thần số học (Numerology) - trò lừa đảo giả danh khoa học', image:'123f7d30407711ed8bfdbbebc4a1c85d.jpg', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'7879b9703e5c11eda9c46f94ace47194', postTitle:'Shark Tank Việt Nam - Truyền cảm hứng khởi nghiệp hay ảo tưởng', image:'7879b9703e5c11eda9c46f94ace47194.png', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'85229960415b11eda183930a8a0f51b3', postTitle:'Chăm Sóc Bản Thân - Vì Mình và Vì Người', image:'85229960415b11eda183930a8a0f51b3.jpg', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'ea96528041cb11edb5d5a5f7d2081a95', postTitle:'Vài suy nghĩ vụn vặt (13): Sống dễ lắm ... mà cũng khó lắm!', image:'ea96528041cb11edb5d5a5f7d2081a95.jpg', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'da366000412711edbd74a7f1e81e6d77', postTitle:'Đại Dương Đen: Trầm cảm không phải biểu hiện của sự yếu đuối.', image:'da366000412711edbd74a7f1e81e6d77.png', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'deabe25041c611edb5d5a5f7d2081a95', postTitle:'CÁCH HỌC TẬP HIỆU QUẢ', image:'deabe25041c611edb5d5a5f7d2081a95.jpg', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'8466b1e041a711eda183930a8a0f51b3', postTitle:'Nói về sự khác biệt và chuyện "hoa hậu xướng tên quê hương"', image:'8466b1e041a711eda183930a8a0f51b3.jpg', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
    ])
    const [allPost, setAllPost] = useState([
        { id:'71f7a2203a3711edbe2243b360f449e8', postTitle:'"KÉM", "LƯỜI", "DỐT" HAY KHUYẾT TẬT HỌC TẬP?', image:'71f7a2203a3711edbe2243b360f449e8.png', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'123f7d30407711ed8bfdbbebc4a1c85d', postTitle:'Thần số học (Numerology) - trò lừa đảo giả danh khoa học', image:'123f7d30407711ed8bfdbbebc4a1c85d.jpg', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'7879b9703e5c11eda9c46f94ace47194', postTitle:'Shark Tank Việt Nam - Truyền cảm hứng khởi nghiệp hay ảo tưởng', image:'7879b9703e5c11eda9c46f94ace47194.png', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'85229960415b11eda183930a8a0f51b3', postTitle:'Chăm Sóc Bản Thân - Vì Mình và Vì Người', image:'85229960415b11eda183930a8a0f51b3.jpg', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'ea96528041cb11edb5d5a5f7d2081a95', postTitle:'Vài suy nghĩ vụn vặt (13): Sống dễ lắm ... mà cũng khó lắm!', image:'ea96528041cb11edb5d5a5f7d2081a95.jpg', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'da366000412711edbd74a7f1e81e6d77', postTitle:'Đại Dương Đen: Trầm cảm không phải biểu hiện của sự yếu đuối.', image:'da366000412711edbd74a7f1e81e6d77.png', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'deabe25041c611edb5d5a5f7d2081a95', postTitle:'CÁCH HỌC TẬP HIỆU QUẢ', image:'deabe25041c611edb5d5a5f7d2081a95.jpg', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
        { id:'8466b1e041a711eda183930a8a0f51b3', postTitle:'Nói về sự khác biệt và chuyện "hoa hậu xướng tên quê hương"', image:'8466b1e041a711eda183930a8a0f51b3.jpg', numberOfViews: 189, category:'Khác', writter:'Thanh Nhã', datePost:'01/10/2022'},
    ])
    const [allCategory, setCategory] = useState([
        { id: '1', name: 'Chính trị - văn hoá' },
        { id: '2', name: 'Giải trí' },
        { id: '3', name: 'Nghệ thuật' },
        { id: '4', name: 'Ẩm thực' },
        { id: '5', name: 'Nhạc' },
        { id: '6', name: 'Game' },
        { id: '7', name: 'Thể thao' },
        { id: '8', name: 'Khác' }
    ])
    const [allPopularCategory, setPopularCategory] = useState([
        { id: '1', name: 'Chính trị - văn hoá', numberOfPosts: 1300},
        { id: '2', name: 'Giải trí', numberOfPosts: 600 },
        { id: '3', name: 'Nghệ thuật', numberOfPosts: 500 },
        { id: '4', name: 'Ẩm thực', numberOfPosts: 300 },
        { id: '5', name: 'Nhạc', numberOfPosts: 100 },
        { id: '6', name: 'Game', numberOfPosts: 90 },
        { id: '7', name: 'Thể thao', numberOfPosts: 60 },
        { id: '8', name: 'Khác', numberOfPosts: 3 }
    ])
    const images = importAll(require.context('../assets/images/post', false, /\.(png|jpe?g|svg)$/));
    function importAll(r){
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./','')] = r(item); });
        return images;
    }
    function WeekPost(post){
        const ImgSource = {
            backgroundImage:`url(${images[post.post.image]})`
        }
        return (
            <div className="WeeklyPost col-lg-6 col-sm-12 m-auto row p-2">
                <div className="ImgIframe col-4 m-auto p-0" style={ImgSource}>
                    
                </div>
                <div className="col-8 m-auto p-0 row">
                    <div className="col-12 m-auto p-2 row">
                        <div className="NormalText col-6 m-auto p-0 text-start text-secondary">
                            #{post.post.category}
                        </div>
                        <div className="col-6 m-auto p-0 text-end text-secondary">
                            57 <FontAwesomeIcon icon="fa-solid fa-heart" style={{color:'rgb(235, 86, 86)'}}/>
                        </div>
                    </div>
                    <div className="col-12 m-auto p-2 row">
                        <div className="col-12 m-auto p-0 fw-bold Title">
                            {post.post.postTitle}
                        </div>
                        <div className="col-12 m-auto p-0 text-start text-secondary" style={{fontSize:'13px'}}>
                            {post.post.datePost}
                        </div>
                    </div>
                    <div className="col-12 m-auto p-2 row">
                        <div className="NormalText text-start col-6 m-auto p-0 fw-bold">
                            <FontAwesomeIcon icon="fa-solid fa-user" />&nbsp;{post.post.writter}
                        </div>
                        <div className="text-end col-6 m-auto p-0 text-secondary">
                            {post.post.numberOfViews} <FontAwesomeIcon icon="fa-solid fa-eye" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    function MonthPost(post){
        const ImgSource = {
            backgroundImage:`url(${images[post.post.image]})`
        }
        return(
            <div className="MonthlyPost col-lg-3 col-md-5 col-xs-12 m-auto row p-4">
                <div className="ImgIframe col-12 m-auto p-0" style={ImgSource}>
                    
                </div>
                <div className="col-12 m-auto p-0 row">
                    <div className="col-12 m-auto p-2 row">
                        <div className="NormalText col-6 m-auto p-0 text-start text-secondary">
                            #{post.post.category}
                        </div>
                        <div className="col-6 m-auto p-0 text-end text-secondary">
                            57 <FontAwesomeIcon icon="fa-solid fa-heart" style={{color:'rgb(235, 86, 86)'}}/>
                        </div>
                    </div>
                    <div className="col-12 m-auto p-2 row">
                        <div className="col-12 m-auto p-0 fw-bold Title">
                            {post.post.postTitle}
                        </div>
                        <div className="col-12 m-auto p-0 text-start text-secondary" style={{fontSize:'13px'}}>
                            {post.post.datePost}
                        </div>
                    </div>
                    <div className="col-12 m-auto p-2 row">
                        <div className="NormalText text-start col-6 m-auto p-0 fw-bold">
                            <FontAwesomeIcon icon="fa-solid fa-user" />&nbsp;{post.post.writter}
                        </div>
                        <div className="text-end col-6 m-auto p-0 text-secondary">
                            {post.post.numberOfViews} <FontAwesomeIcon icon="fa-solid fa-eye" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    function AllPost(post){
        const ImgSource = {
            backgroundImage:`url(${images[post.post.image]})`
        }
        return(
            <div className="AllPost col-12 row p-2 m-auto mt-5">
                <div className="ImgIframe col-lg-4 col-md-12 h-100 m-auto p-0" style={ImgSource}>
                    
                </div>
                <div className="col-lg-8 col-md-12 m-auto p-0 row">
                    <div className="col-12 m-auto p-2 row">
                        <div className="NormalText col-6 m-auto p-0 text-start text-secondary">
                            #{post.post.category}
                        </div>
                        <div className="col-6 m-auto p-0 text-end text-secondary">
                            57 <FontAwesomeIcon icon="fa-solid fa-heart" style={{color:'rgb(235, 86, 86)'}}/>
                        </div>
                    </div>
                    <div className="col-12 m-auto p-2 row">
                        <div className="col-12 m-auto p-0 fw-bold Title">
                            {post.post.postTitle}
                        </div>
                        <div className="col-12 m-auto p-0 text-start text-secondary" style={{fontSize:'13px'}}>
                            {post.post.datePost}
                        </div>
                    </div>
                    <div className="col-12 m-auto p-2 row">
                        <div className="NormalText text-start col-6 m-auto p-0 fw-bold">
                            <FontAwesomeIcon icon="fa-solid fa-user" />&nbsp;{post.post.writter}
                        </div>
                        <div className="text-end col-6 m-auto p-0 text-secondary">
                            {post.post.numberOfViews} <FontAwesomeIcon icon="fa-solid fa-eye" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    function GetCategory(category) {
        return(
            <option className="w-100" value={category.category.id}>{category.category.name}</option>
        )
    }
    function PopularCategory(Category){
        return(
            <div className="PopularCategory col-12 row m-auto p-3 pt-4 pb-4">
                <div className="fw-bold col-9 m-auto p-0 text-start">{Category.Category.name}</div>
                <span className="fw-light col-3 m-auto p-2 badge">{Category.Category.numberOfPosts} bài</span>
            </div>
        )
    }
    return (
        <div className="MainBody row w-100 center pb-5" style={{maxWidth:'1300px'}}>
            <div className="WeeklyPosts col-11 m-auto row p-0 ">
                <div className="Title col-12 m-auto mb-1 p-0">
                    <b>Những bài viết phổ biến trong tuần này</b>
                </div>
                <div className="col-12 m-auto p-0 row">
                    {weeklyPost.map(post => <WeekPost key={post.id} post={post}/>)}
                </div>
            </div>
            <hr className="col-11 m-auto mt-5 mb-5"/>
            <div className="MonthlyPosts col-11 m-auto row p-0">
                <div className="Title col-12 m-auto mb-1 p-0">
                    <b>Top 8 bài viết nhiều lượt xem nhất trong tháng</b>
                </div>
                <div className="col-12 m-auto p-0 row">
                    {monthlyPost.map(post => <MonthPost key={post.id} post={post}/>)}
                </div>
            </div>
            <hr className="col-11 m-auto mt-5 mb-5"/>
            <div className="AllPosts col-11 m-auto row p-0">
                <div className="col-lg-8 col-sm-12 row m-auto p-0">
                    <div className="col-4 m-auto row p-0">
                        <select className="Category form-select Category col-12" style={{background:'#fcfeff'}}>
                            <option selected className="w-100">Chủ đề</option>
                            {allCategory.map(category => <GetCategory key={category.id} category={category}/>)}
                        </select>
                    </div>
                    <div id="searchBar" className="col-8 m-auto row p-0">
                        <div class="input-group">
                            <input type="text" className="border-top border-bottom border-start form-control" style={{border:'none'}} placeholder="Tìm kiếm" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="border-top border-bottom border-end rounded-end" style={{border:'none',background:'none'}}><FontAwesomeIcon icon="fa-solid fa-check" /></button>
                        </div>
                    </div>
                    <div className="col-12 m-auto p-0 row">
                        {allPost.map(post => <AllPost key={post.id} post={post}/>)}
                    </div>
                    <hr className="col-12 m-auto row p-0 mb-5 mt-5"/>
                    <div className="col-12 m-auto row p-0">
                        <button className="col m-auto text-dark fw-bold" style={{border:'none',background:'none'}}>1</button>
                        <button className="col m-auto text-dark fw-bold" style={{border:'none',background:'none'}}>2</button>
                        <button className="col m-auto text-dark fw-bold" style={{border:'none',background:'none'}}>3</button>
                        <button className="col m-auto text-dark fw-bold" style={{border:'none',background:'none'}}>4</button>
                        <button className="col m-auto text-dark fw-bold" style={{border:'none',background:'none'}}>5</button>
                        <button className="col m-auto text-dark fw-bold" style={{border:'none',background:'none'}}>6</button>
                        <button className="col m-auto text-dark fw-bold" style={{border:'none',background:'none'}}>7</button>
                        <button className="col m-auto text-dark fw-bold" style={{border:'none',background:'none'}}><FontAwesomeIcon icon="fa-solid fa-forward" /></button>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 mt-sm-5 mt-lg-0 mt-lg-0 p-0">
                    <div className="fw-bold fs-5 m-auto p-0 text-center text-dark" style={{width:'90%'}}>
                        Chủ đề đang được quan tâm nhiều nhất
                    </div>
                    <div className="PopularCategorys m-auto row rounded-3" style={{width:'90%'}}>
                        {allPopularCategory.map(Category => <PopularCategory key={Category.id} Category={Category}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
