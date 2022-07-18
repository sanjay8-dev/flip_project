import './insideBook.css';
import HTMLFlipBook from "react-pageflip"
import React from "react";
import backcover from "./img/backCover.jpg"
import james from './img/james.png';
import alcatrazPB from './img/alcatrazPB.png';


const InsideBook = (props) => {

  return (

    <div className="inside">
      <HTMLFlipBook drawShadow = {true} showCover = {false} width={590} height={700} autoSize = {false} size = "fixed">

          
          <div className="demoPage">
              {/* <img src={backcover} alt="backCover"/> */}
          </div>

          {/* ---------ContentsPage---------- */}
          <div className="demoPage">
              <h1 className='contentheading'>CONTENTS</h1>
              <p className='contenttitle'><span className='count'>#1</span>The boy who hacked NASA at the age of 15..........</p>
              <p className='contenttitle'><span className='count'>#2</span>The story behind the Alcatraz prison escape..........</p>
              
          </div>
          {/* ---------------------------------------- */}

          {/* --------------------Story 1----------------- */}
          <div className="demoPage">
            <h1 className='storycount'>#1 </h1>
            <h1 className='storyheading'>The boy who hacked NASA at the age of 15</h1>
            <p className='storycontentdiv1'>Jonathan James was born on December 12, 1983, in a small Village called Pinecrest that is located in Miami-Dade County, Florida.His father was a computer
             programmer and his mother was a housewife.His interest in computers began at the age of 6 where he would regularly use his father’s computer to play video games.James’s parents would quickly realize that their son was
            spending too much time in front of the computer screen and tried to impose restrictions, which eventually James bypassed using his hacking “charisma” from a very young age.His interests
            gradually changed with age, from playing games to learning the C language. His curiosity about computers came to light as a surprise to his father when he came home one day to see that 
            his personal computer was converted from windows OS to Linux OS. James installed Linux on his father’s computer from curiosity to test the unfamiliar operating system and understand how
            it works.During his teen years, he became obsessed with computers and technology as he was spending most of his free time day and night on his computer. At the age of 13, this led his 
            parents to take stronger measures and took away his computer.He ran away from home refusing to come back until his parents return his computer, insisting that programming and video games
            weren’t affecting his grades.Later it was found that he hacked into the network of educational institutions in Miami-Dade County and corrected his scores in the reports.At the age of 15,
            James had enough with hacking his educational institutions and set bigger hacking goals. Between June 23, 1999, and October 27, 1999, he committed a series of intrusions into various 
            systems.His first target was AT and T BellSouth, one of the largest telecommunications companies at the time in the US.His main goal was not to profit or stealing</p>
          </div>

          <div className="demoPage">
            <p className='storycontentdiv1'>
            information but more abouttesting his hacking abilities on a bigger target like AT and T Bellsouth.When he found one in Huntsville, Alabama, he went on and installed malware on a comprised network.The network comprised
            surprisingly belonged to a unit NASA of US.After NASA security experts discovered that their network was compromised, they disconnected the server, alongside the compromised machines for a
            period of 3 weeks to analyze the intrusion which led to 40 thousand dollars direct damages for NASA.This hack went on to be his last one, the last intrusion didn’t go unnoticed because of
            the importance of the target. In January 2000, Defense Department agents, along with Pinecrest police they proceeded to order an arrest for James. On January 26th, agents with bulletproof
            vests and guns raided his home and arrested him. They seized four PCs, a laptop, and one pocket computer from the house.The events caused James’ severe depression. He was often anxious in
            a depressed state following the incidents with the Secret service again. On May 18, 2008, James was found dead in the bathroom of his home with a self-inflicted gunshot wound to the head 
            from the same rifle that the agents found during the raid.</p>
            <div className='picture'>
              <img src={james} />
            </div>
          
        </div>
            {/* --------------------Story 1 End--------------- */}

            {/* --------------------Story 2--------------- */}
          <div className="demoPage">
            <h1 className='storycount'>#2 </h1>
            <h1 className='storyheading'>The story behind the Alcatraz prison escape</h1>
            <p className='storycontentdiv1'>
            On the night of 11th June 1962, three hardened convicts broke out of the maximum-security prison on Alcatraz Island and escaped in a boat they’d made from stolen raincoats.
Officially, they were never seen or heard from again. However, many people, including the families of the three escapees, believe that they did get away that night and have
 lived for decades on the run.The ringleader was seasoned criminal Frank Morris.Frank’s accomplices were the Anglin brothers, John and Clarence, and Allen West. Allen West 
made up the last member of the escape party. A serial offender, Allen had been arrested over 20 times before finally being imprisoned for car theft in 1955.By the time they
 were all incarcerated in Alcatraz, the four men knew each other well, having all served time with each other on several occasions in other prisons. After they were all 
placed in adjoining cells where they could talk at night, they hatched a plan to escape.Under the leadership of Morris, the four men planned to tunnel through the walls
of their cells, build a raft and escape the island by sea. After collecting discarded saw blades from the prison workshops and metal spoons from the dining hall, they 
crafted a drill from a vacuum cleaner motor. They used their improvised tools to begin widening the holes around the ventilation ducts under the sinks in each of their cells
, concealing their handiwork from the guards with painted strips of cardboard.To hide the noise they made drilling through into the unguarded utility corridor behind their cells
, Morris would play his accordion during music hour in the prison - an hour set aside each day for music to be piped into the prison as a method of calming the prisoners down.
Once they could fit through the holes, the men set up a makeshift workshop in the empty top level of their cellblock. Here they made the raft 
            </p>
          </div>

          <div className="demoPage">
          <p className='storycontentdiv1'>
          they would use to escape, as well
 as a set of life jackets. The raft and the jackets were made from stolen and donated raincoats, carefully stitched together and sealed by melting the rubber on the hot pipes 
in their workshop.When it came to covering up their absence when they were in their workshop, the men ingeniously constructed papier-mache versions of their heads from soap, 
dust, toilet paper, and toothpaste. The heads were made to look realistic with paint from the maintenance workshop and real human hair collected from the floor of the prison 
barbershop. They were placed on the prisoners’ pillows while clothes and towels were stuffed under their blankets in the shape of their bodies. Any guard looking in would see 
them sound asleep in their beds, when in fact they were up on the top level building a 6x14 foot rubber raft and paddles from scraps of wood and stolen screws.Finally, on the 
night of 11th June 1962, the raft was ready and it was time to initiate the plan. West’s hopes of escaping were quickly scuppered when he realised the cement he’d used to reinforce
the concrete around the vent had hardened, preventing him from getting through the hole he’d made. By the time he’d managed to widen the hole again, his accomplices had gone. 
He went back to bed.Meanwhile, Frank and the two Anglin brothers made their escape up a ventilation shaft to the roof of the prison. Their escape was nearly foiled when they made a 
loud noise breaking out of the shaft, but luckily the guards who heard it decided not to investigate. With the coast clear, the three men used kitchen pipes to descend fifty feet to 
the ground and climbed over two twelve-foot barbed wire perimeter fences. They 
inflated the raft using a modified concertina stolen from an inmate and, at about ten o’clock, they pushed off and headed in the direction of nearby Angel Island. A huge search operation
swung into action involving both civilian law enforcement and the military. The land, air, and sea surrounding Alcatraz Island and beyond were extensively searched over the next ten days.
Officially, at least, they were never seen again.
          </p>
          <img src=''></img>
          </div>

          <div className='demoPage'>
          <div className='picture'>
              <img src={alcatrazPB} />
            </div>
          </div>
{/* --------------------Story 2 End--------------- */}

{/* --------------------Story 3--------------- */}

<div className="demoPage">
            
          </div>

{/* --------------------Story 3 End--------------- */}
      </HTMLFlipBook>
    </div>
   
  );
}

export default InsideBook;