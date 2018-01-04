/* 切换商品列表 */
function toggleList () {
  let n = $(this).parents('.box').index('.box')
  let s = $(this).index()
  $('.box').eq(n).find('.box-content').removeClass('ac').eq(s).addClass('ac')
}
/* 切换list选中 */
$('.sort-list li').hover(function () {
  $(this).siblings().removeClass('now')
  $(this).addClass('now')
  toggleList.call(this)
}, function () {
})
/* 商品选中显示评价 */
$('.info').hover(function () {
  $(this).find('.remark').addClass('show')
}, function () {
  $(this).find('.remark').removeClass('show')
})
/* 初始化显示 */
$(function () {
  $('.sort-list li.now').each(function () {
    toggleList.call(this)
  })
})
