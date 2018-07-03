import React from 'react'
import styled, { css } from 'react-emotion'

const Hole = styled('div')`
  opacity: 1;
  width: 100%;
  height: 13px;
  border: 1px solid #0d2;
  background-color: pink;
`

const Slide = styled('div')`
  background-color: #222;
  width: 280vw;
  height: 260px;
  color: #aaa;
`

const SliderWrapper = styled('div')`
  background-color: #999;
  width: 80vw;
  height: 160px;
  overflow-x: auto;
  overflow-y: hidden;
`

const SliderBar = styled('div')`
  height: 20px;
  width: 100%;
  position: relative;
  top: -105px;
  background-color: white;
`

const Slider = () => (
  <div className={css`height: 400px;`}>Slider
    <SliderWrapper>
      <Slide>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eius repellat aliquid aut modi asperiores esse fugit dolorum veniam labore. Iste sequi at quibusdam sint corporis velit, veritatis voluptate eligendi asperiores dolorum itaque, nulla ea odio reiciendis eum molestiae, assumenda placeat quae modi quasi autem? Vel voluptates voluptas aliquam obcaecati, minima perferendis perspiciatis libero laudantium accusantium magnam est esse cum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eius repellat aliquid aut modi asperiores esse fugit dolorum veniam labore. Iste sequi at quibusdam sint corporis velit, veritatis voluptate eligendi asperiores dolorum itaque, nulla ea odio reiciendis eum molestiae, assumenda placeat quae modi quasi autem? Vel voluptates voluptas aliquam obcaecati, minima perferendis perspiciatis libero laudantium accusantium magnam est esse cum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eius repellat aliquid aut modi asperiores esse fugit dolorum veniam labore. Iste sequi at quibusdam sint corporis velit, veritatis voluptate eligendi asperiores dolorum itaque, nulla ea odio reiciendis eum molestiae, assumenda placeat quae modi quasi autem? Vel voluptates voluptas aliquam obcaecati, minima perferendis perspiciatis libero laudantium accusantium magnam est esse cum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eius repellat aliquid aut modi asperiores esse fugit dolorum veniam labore. Iste sequi at quibusdam sint corporis velit, veritatis voluptate eligendi asperiores dolorum itaque, nulla ea odio reiciendis eum molestiae, assumenda placeat quae modi quasi autem? Vel voluptates voluptas aliquam obcaecati, minima perferendis perspiciatis libero laudantium accusantium magnam est esse cum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eius repellat aliquid aut modi asperiores esse fugit dolorum veniam labore. Iste sequi at quibusdam sint corporis velit, veritatis voluptate eligendi asperiores dolorum itaque, nulla ea odio reiciendis eum molestiae, assumenda placeat quae modi quasi autem? Vel voluptates voluptas aliquam obcaecati, minima perferendis perspiciatis libero laudantium accusantium magnam est esse cum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eius repellat aliquid aut modi asperiores esse fugit dolorum veniam labore. Iste sequi at quibusdam sint corporis velit, veritatis voluptate eligendi asperiores dolorum itaque, nulla ea odio reiciendis eum molestiae, assumenda placeat quae modi quasi autem? Vel voluptates voluptas aliquam obcaecati, minima perferendis perspiciatis libero laudantium accusantium magnam est esse cum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eius repellat aliquid aut modi asperiores esse fugit dolorum veniam labore. Iste sequi at quibusdam sint corporis velit, veritatis voluptate eligendi asperiores dolorum itaque, nulla ea odio reiciendis eum molestiae, assumenda placeat quae modi quasi autem? Vel voluptates voluptas aliquam obcaecati, minima perferendis perspiciatis libero laudantium accusantium magnam est esse cum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eius repellat aliquid aut modi asperiores esse fugit dolorum veniam labore. Iste sequi at quibusdam sint corporis velit, veritatis voluptate eligendi asperiores dolorum itaque, nulla ea odio reiciendis eum molestiae, assumenda placeat quae modi quasi autem? Vel voluptates voluptas aliquam obcaecati, minima perferendis perspiciatis libero laudantium accusantium magnam est esse cum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eius repellat aliquid aut modi asperiores esse fugit dolorum veniam labore. Iste sequi at quibusdam sint corporis velit, veritatis voluptate eligendi asperiores dolorum itaque, nulla ea odio reiciendis eum molestiae, assumenda placeat quae modi quasi autem? Vel voluptates voluptas aliquam obcaecati, minima perferendis perspiciatis libero laudantium accusantium magnam est esse cum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eius repellat aliquid aut modi asperiores esse fugit dolorum veniam labore. Iste sequi at quibusdam sint corporis velit, veritatis voluptate eligendi asperiores dolorum itaque, nulla ea odio reiciendis eum molestiae, assumenda placeat quae modi quasi autem? Vel voluptates voluptas aliquam obcaecati, minima perferendis perspiciatis libero laudantium accusantium magnam est esse cum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eius repellat aliquid aut modi asperiores esse fugit dolorum veniam labore. Iste sequi at quibusdam sint corporis velit, veritatis voluptate eligendi asperiores dolorum itaque, nulla ea odio reiciendis eum molestiae, assumenda placeat quae modi quasi autem? Vel voluptates voluptas aliquam obcaecati, minima perferendis perspiciatis libero laudantium accusantium magnam est esse cum.
        <SliderBar></SliderBar>
      </Slide>
    </SliderWrapper>
    <hr />
    <Hole></Hole>
  </div>
)

export default Slider