import React from "react"

const WhitePaper = () => (
  <div>
    <h2>Notes on design decisions and process (white paper)</h2>
    <p>
      When I set out to do this project, I didn’t expect it to be quite so
      tedious. Lucky for me, my subject exudes joy. This meant that even at the
      most infuriating moments, I was still genuinely happy to be working with
      my source material. Doing meta-analysis on Bill Cunningham’s work is a
      feast for the eyes.{" "}
    </p>
    <p>
      The first difficult aspect was getting my hands on data. At first I tried
      transcribing, then getting text from his columns, and even then, there was
      little the data could tell me that I’d also be able to communicate via a
      visual. Eventually, I tracked down the image of the way each column was
      printed.Everything shifted when I was able to get those. For a digital,
      interactive medium, seeing the full page spread communicates much more
      than text analysis. Text analysis is only interesting when the audience
      already has a context for what you’re analyzing.{" "}
    </p>
    <p>
      With only images, there’s very little given to you beyond date and title.
      So I chose to start categorizing what I had. I tagged each column with as
      many interesting features as I could think of. I started out looking at
      fashion trend topics like popular bag styles or cuts of skirts/dresses. It
      turned out that other than color, most of these were so specific that they
      became hard to generalize. Perhaps if I had a few decades of work and not
      just a few years, I could have documented those more easily. More often
      Bill was focused on color, a broader theme, or holidays.{" "}
    </p>
    <p>
      I began with holidays. Since I had several years of data, I knew I should
      have several columns per holiday (yes, fashion week is a holiday because
      it’s annual and it’s a big deal). I wanted to show comparisons of
      quantity, but not with precision. A bar chart would have made it seem like
      the actual number of columns for any given holiday was important. I wanted
      to show emphasis, but actual numbers were less important. I want the
      audience to think “Oh! There were a lot of Christmas columns. Let’s
      explore.” instead of, “Oh! There are 19 New York fashion week columns but
      only 18 from Paris Fashion Week.” With the packed bubble chart you would
      have to try to notice that. Putting that data in the tooltip makes the
      comparison more convoluted--in a good way. Plus, I really wanted to
      include this section because we are at the beginning of winter and it’s
      holiday season. The packed bubble chart reminded me of ornaments on a
      tree. Hopefully it’s obvious, but I also chose colors that would match the
      holiday.{" "}
    </p>
    <p>
      I went through a few iterations of the list of columns on the right.
      Originally it was a filled box to match the holiday color in the packed
      bubble chart with white text. It started looking really funky when you got
      down to holidays with only a single column. Plus, I was going for playful
      and it read as juvenile. The white background makes for a cleaner
      experience too. The richness of the columns shouldn’t be competed with too
      heavily. To have both the packed bubble and huge blocks of color was just
      too much.
    </p>
    <p>
      For both the Theme and Holiday dashboards I used an extra word chart for
      the titles. This allowed me to use color and to make that title dynamic.
      Initially I had this dynamically changing title in the top right hand
      corner of the visualization. When I did user testing around my office,
      that title wasn’t even noticed when it was in the corner. This is a bigger
      problem when the elected holiday doesn’t have a labeled bubble. When I
      moved the holiday/theme title to be just above the column list, it made it
      clearer that those columns were part of that particular category. In the
      holiday visualization, it also made the user instruction easier to
      distinguish and read.{" "}
    </p>
    <p>
      A struggle was getting user interactions right. The opacity change of
      unselected items is hard to work around. This became an issue on the So,
      if a user selects a particular column to look at, they can no longer read
      the names of the other columns. This makes it hard to know where you’re
      navigating next. Then sometimes it becomes difficult to de-select. Because
      of this, I decided to use hover as my action instead. The tradeoff is that
      it makes it harder to zoom in on anything. In both iterations, I saw users
      getting confused and frustrated about when to click and where to go next.{" "}
    </p>
    <p>
      I included interaction prompts on this project. I found this to be
      especially important on the browse screen. The date slider is one of the
      less intuitive parts of the screen so I wanted to make sure that the
      functionality available was clear.{" "}
    </p>
    <p>
      Since these visualizations had similar functionality, design consistency
      across screens was very important. I made use of the dashboard format
      tools for things like precise positioning and sizing. This was important
      for the container for the column images and also for the titles. I used a
      sans serif fonts that I thought most closely resembled the ON THE STREET
      title in the columns. I also wanted my navigation titles to be more
      declarative and to follow a pattern. Short punchy sentences since that’s
      how his column titles were: short and punchy.{" "}
    </p>
    <p>
      For the column images themselves, I wanted them to fill up as much of the
      screen as was reasonable. For this reason, I made my story and the
      individual dashboards larger in size. You really need to go full screen
      mode. There is just so much packed into each column that the smaller the
      image, the more information and detail you lose.
    </p>
    <p>
      The color dashboard is a late addition but maybe my favorite. The use of
      the waffle chart feels playful and clean. There was a small enough number
      of columns that focused on color that this feels both rich and not
      overwhelming. Initially the colors of the columns were pretty random. On a
      suggestion from a woman named Eve who was looking my visualization over, I
      rearranged the order to look more like a rainbow. It immediately somehow
      felt both more playful and cleaner. Cha-ching.{" "}
    </p>
    <p>
      The only idea I had coming in to this visualization that survived was the
      heat map. I used a color to match Bill’s blue work jacket since this
      number is tied to his work ethic. I wanted to add a label so that the user
      wouldn’t have to hover to see the number of images. At some point, having
      those tiny numbers in squares looked really busy. I felt the circles made
      the visualization feel softer. Originally, the two charts for 2015 and
      2016 were stacked. Because of the sizing decision I made for the columns,
      this felt very sparse. I made the years side by side to fill the space.
    </p>
    <p>
      It doesn't feel like much unto itself, but I needed the browse
      visualization. I added it an hour before our final presentation. I just
      felt there should be a place where the reader could do their own exploring
      without such rigidity around what would be displayed. It also helped me
      sneak in a few otther mini-themes.{" "}
    </p>

    <p>
      This has been a great semester on learning iteration and how to be
      deliberate about my design choices. For the first time I feel comfortable
      taking a data set and being able to envsion interesting visualizations
      that could tell a story.{" "}
    </p>

    <p>
      The hardest decision I made all semester, of course, is what I was gong to
      wear on Thursday.
    </p>
  </div>
)

export default WhitePaper
