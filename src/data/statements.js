import {FIXED_CASE_EXTENSION_STATEMENTS} from './fixedCaseExtensions.js';
import {NORA_STATEMENTS} from './noraContent.js';
import {MIA_STATEMENTS} from './miaContent.js';
import {EXTENSION_STATEMENTS} from "./skillExtensions.js";
import {ARNE_STATEMENTS} from './arneContent.js';
"use strict";

export const STATEMENT_SETS = {
  "therapist-self-awareness": {
    "case-sara": [
      {
        "text": "[Loving] I was crying on the bed last night and my dog climbed up beside me like he always does. He put his head on my leg and stayed there while I talked to him about the breakup. It sounds silly, but he is the only one who never seems tired of me being sad. I do not know where I would be without him.",
        "suggestion": "[Self-awareness] I notice warmth in my chest and a wish to comfort her. I can hold both privately while listening, without acting on the rescuing impulse."
      },
      {
        "text": "[Nervous] I am glad I booked this, but I am also nervous because I have never really done therapy before. Part of me worries I will just sit here and talk about him for an hour and you will think this is not a real problem. Another part of me is scared that if I start talking, I will cry and not be able to stop.",
        "suggestion": "[Self-awareness] I notice a pull to reassure her quickly and organize the session for her. I pause and notice my breathing before letting that urge decide what I do."
      },
      {
        "text": "[Anxious] Since I moved apartments after the breakup, everything feels unfamiliar. The neighbors are louder, the streets are busier, and I keep comparing it to the old place where I knew exactly what sounds belonged where. I know that is a small thing, but I feel jumpy and out of place all the time. Can you help me settle into this?",
        "suggestion": "[Self-awareness] I notice a practical problem-solving impulse and some protectiveness toward her; I would track that urge and stay aware of my own wish to make the move easier."
      },
      {
        "text": "[Uncomfortable] Last night I had a strange dream that I was back in the old apartment packing boxes. I could hear him in another room, but every time I opened a door it was empty. Then you were suddenly there helping me tape a box shut. I felt relieved in the dream, and then I woke up embarrassed that you were in it at all.",
        "suggestion": "[Self-awareness] I notice curiosity, a little embarrassment, and a wish to interpret the dream. I can notice those reactions privately without turning them into an interpretation or a disclosure to her."
      },
      {
        "text": "[Hopeful] I keep thinking that maybe therapy can help me get my life back, even if that sounds dramatic. I read about people learning to stop repeating the same relationship patterns, and I want that so badly. At the same time, I am afraid of getting hopeful in front of you because then I might disappoint both of us if I stay stuck.",
        "suggestion": "[Self-awareness] I feel encouraged by her hope and also pressure to deliver; I would notice the pressure in my chest without making promises to relieve it."
      },
      {
        "text": "[Hesitant] My friends keep saying I should date again, and I keep asking them what they would do because I do not trust myself. Part of me wants you to just tell me whether it is a terrible idea. I know therapists probably do not do that, but I am tired of making decisions and then wondering if I ruined everything.",
        "suggestion": "[Self-awareness] I notice the pull to advise and rescue her from uncertainty; I would say to myself that the urge is mine to hold, not something I need to act out."
      },
      {
        "text": "[Ashamed] I hate admitting this, but after our last session I kept wishing you would somehow check on me. I know that is not how therapy works, and I feel needy even saying it. I almost cancelled today because I thought you would hear that and think I am too attached or too much already.",
        "suggestion": "[Self-awareness] I notice tenderness and a pull to offer extra contact; I would track the wish to soothe while protecting my own and the client's boundaries."
      },
      {
        "text": "[Embarrassed] I can feel myself getting close to crying, and I hate that it is happening this early in the session. I am worried you will see me as dramatic or pathetic, even though I know that is probably not fair. I keep swallowing it down because once I start, I am scared I will look like someone who cannot handle normal life.",
        "suggestion": "[Self-awareness] I notice an urge to reassure her that crying is acceptable; I would first notice my own softened face and the impulse to protect her from shame."
      },
      {
        "text": "[Anxious] I keep watching your face while I talk, and if you look serious I start wondering whether I said too much. I know you are probably just listening, but I get busy trying not to make you uncomfortable. Then I lose track of what I was saying because I am checking whether you can still handle me.",
        "suggestion": "[Self-awareness] I notice the unusual feeling of being managed by the client and a wish to prove I am comfortable; I would ground that reaction before speaking."
      },
      {
        "text": "[Quietly] I moved apartments after the breakup, and I thought unpacking would make me feel like I was starting over. Instead every box feels like proof that I am doing this alone. I found mugs we bought together and stood there for twenty minutes, then I felt ridiculous because people move on from breakups all the time.",
        "suggestion": "[Self-awareness] I notice sadness and a wish to soften her loneliness. I can stay aware of the sadness without rushing to comfort her or asking her to take care of my reaction."
      },
      {
        "text": "[Quietly pleased] I went to the café on my own this weekend. I didn't spend the whole time checking my phone. I wanted to tell you, even though it isn't much.",
        "suggestion": "[Self-awareness] I notice warmth and an urge to praise her quickly. I can stay with that warmth without deciding for her how much this matters."
      },
      {
        "text": "[Apologetic] You look tired today. We could talk about something lighter. I don't want you going home with my sadness as well as everyone else's.",
        "suggestion": "[Self-awareness] I notice relief at her offer and then discomfort about that relief. I would hold both privately rather than let her take care of me."
      }
    ],
    "case-michael": [
      {
        "text": "[Beginning of first session] My wife says I need therapy, and I am trying to take that seriously before I mess things up more at home. I do not want to sit around blaming my childhood for everything, though. I need tools I can actually use when my temper starts climbing, because once it is up I can hear myself getting louder and I still do not stop.",
        "suggestion": "[Self-awareness] I notice a pull to become useful fast and prove therapy can help; I would track the pressure in my shoulders before responding."
      },
      {
        "text": "[Defensive] My last coach gave me breathing tools in two sessions, and at least that felt practical. I am not saying it fixed everything, but I knew what I was supposed to do. I hope this is not going to be a long tour through childhood while my wife is at home deciding whether she can stand me. I need to know you have a plan.",
        "suggestion": "[Self-awareness] I notice defensiveness on behalf of the therapy and a wish to compete with the previous coach. I keep that reaction private and notice the pressure to prove myself before responding."
      },
      {
        "text": "[Ashamed] My son asked if I was mad at him after I snapped at my wife, and I could see he was trying to read the room. I told him no, but his face stayed careful. All night I wanted someone to tell me I had not ruined everything. Then I hated that I needed reassurance like that, because I am supposed to be the adult.",
        "suggestion": "[Self-awareness] I notice guilt and a strong wish to reassure him that he has not ruined everything; I would breathe into that rescuing impulse and keep it visible to myself."
      },
      {
        "text": "[Tense] My boss corrected one line in my report in front of two people, and it was not even a major correction. I nodded, fixed it, and looked normal. But on the drive home I kept hearing his voice and imagining what everyone thought. By the time I walked in the door, my jaw hurt and I was already short with my wife.",
        "suggestion": "[Self-awareness] I notice tension in my own jaw and a pull to normalize the correction; I would track how quickly I want to reduce his shame."
      },
      {
        "text": "[Defensive] If I apologize first, my wife acts like that proves the whole fight was my fault. Maybe she does not say that directly, but that is how it feels. Then I look weak, and she gets to be the reasonable one again. I know that sounds petty, but I cannot stand handing someone proof that they won.",
        "suggestion": "[Self-awareness] I notice an urge to persuade him to apologize and a tightening in my chest. I recognize the urge as mine and pause before letting it become pressure on him."
      },
      {
        "text": "[Awkward] I am not used to talking like this. At work I can run a meeting with ten people and make decisions quickly, but in here I lose my words and feel stupid. If I get quiet, it does not mean I do not care. It means I am trying not to say something that makes me sound either weak or like a jerk.",
        "suggestion": "[Self-awareness] I notice warmth toward his effort and a wish to make this easier for him; I would stay aware of that tenderness without taking over."
      },
      {
        "text": "[Firm] If we are not fixing my temper fast, I start feeling like I am failing at therapy too. That probably sounds like I am trying to grade you, but I grade myself first. I came here because I do not want to scare my family, and if I keep having the same reactions then I wonder whether I am just bad at this like everything else emotional.",
        "suggestion": "[Self-awareness] I notice performance pressure moving into me, as if I need to show progress quickly; I would name that pressure internally and slow my breathing."
      },
      {
        "text": "[Defensive] My dad was strict, but that is how men learned discipline where I grew up. You did not talk back, you did not complain, and you did not make every feeling into an event. Part of me thinks people now are too soft, and part of me knows I sound exactly like him when I say that. I do not know what you are going to do with that.",
        "suggestion": "[Self-awareness] I notice assumptions about masculinity and a wish to soften his stance; I would keep my own values in view without turning them into a correction."
      },
      {
        "text": "[Tense] People at work are soft now. If you ask for standards, they act like you attacked their identity. I know saying that probably makes me sound like the problem, and maybe it bothers you. But if it does, maybe you just do not get my world. I need someone who can handle directness without turning me into the villain.",
        "suggestion": "[Self-awareness] I notice irritation and a wish to defend against being tested; I would quietly label that defensiveness so I can keep listening."
      },
      {
        "text": "[Tense and angry] If I let up even a little, people walk over me. I have seen it happen at work and at home. Someone pushes, I try to stay calm, and then suddenly I am the one backing down while they decide what happens next. I hate that feeling. It is like everyone can see I lost position before I even know what I feel.",
        "suggestion": "[Self-awareness] I notice my shoulders bracing and an urge to calm him down; I would track the bracing as information about the pressure in the room."
      },
      {
        "text": "[Pleased but awkward] My son asked me to help with his bike. We managed it without me snapping once. He stayed beside me afterwards. I didn't know what to do with that.",
        "suggestion": "[Self-awareness] I feel moved and want to make this a success story. I notice that eagerness and leave room for his less tidy experience."
      },
      {
        "text": "[Matter-of-fact] I made a spreadsheet of every argument this month. I thought you could identify the pattern and tell me exactly what to change.",
        "suggestion": "[Self-awareness] I notice myself moving into expert mode and enjoying being useful. I can notice that pull before joining his demand for a perfect solution."
      }
    ],
    "case-jason": [
      {
        "text": "[Beginning of first session] I am relieved to be here, but I am also worried I will waste the hour by not knowing what to say. I have never been good at starting conversations, and therapy feels like one long conversation where I am supposed to know what matters. If I go blank, I might just sit here and make this awkward for both of us.",
        "suggestion": "[Self-awareness] I notice a wish to structure the hour for him and protect him from awkwardness; I would track that urge before I fill the silence."
      },
      {
        "text": "[Blank] I am blank again. I had things in my head in the waiting room, but now that you are looking at me they are gone. I can feel myself trying to guess whether you are bored or disappointed. Then I get more blank because I am watching your face instead of remembering what I wanted to say.",
        "suggestion": "[Self-awareness] I notice pressure to reassure him and rescue the silence; I would describe the urge to fill space only if it helped me stay aware."
      },
      {
        "text": "[Hesitant] Please do not make me close my eyes. I know people do mindfulness and body stuff in therapy, but when I close my eyes I feel ridiculous, like I am performing relaxation while you watch me fail at it. Then I start wondering what my face looks like, and the whole thing gets worse instead of calming me down.",
        "suggestion": "[Self-awareness] I notice a small embarrassment and a wish to adjust the exercise immediately; I would stay aware of wanting to make the discomfort disappear."
      },
      {
        "text": "[Long pause] Sorry. I do that every time I go quiet, because I assume the silence is awkward for you. At work, if there is a pause, someone jumps in and fixes it. Here it feels like the pause points straight at me. I start thinking you are waiting for something important and I am giving you nothing.",
        "suggestion": "[Self-awareness] I notice the silence working on me too and a pull to prove I am not uncomfortable; I would name that internally and let the pause exist."
      },
      {
        "text": "[Worried] I do not really know how therapy is supposed to work. I have read that talking helps, but I have also had times where thinking about something made me spiral for the rest of the day. What if I open things up here and then go back to my apartment alone and feel worse? I am not sure how people are supposed to know this is safe.",
        "suggestion": "[Self-awareness] I notice an urge to explain the therapy process and calm him quickly; I would first track the anxiety that rises in me around his fear."
      },
      {
        "text": "[Quiet and ashamed] I skipped the exercises again. I had the worksheet open on my laptop and just kept rereading the instructions, then I closed it and watched videos instead. Now I feel like I have messed up therapy homework, which sounds childish. I almost lied and said I forgot, but that somehow felt worse.",
        "suggestion": "[Self-awareness] I notice a teaching impulse and a wish to remove his shame; I would keep my tone steady and observe that impulse rather than act from it."
      },
      {
        "text": "[Quiet and ashamed] I feel stupid when you ask about feelings, like there is an answer normal people can find and I am missing it. I start scanning my body and mostly notice that I am tense because you asked. Then I wonder whether I am doing therapy wrong. I know you are probably not testing me, but it feels like a test.",
        "suggestion": "[Self-awareness] I notice a wish to reassure him that he is doing it right; I would track my softened voice and the urge to protect him from feeling tested."
      },
      {
        "text": "[Anxious] I moved here for work, and people talk like they already know the rules. They joke faster, interrupt more, and seem to know when it is okay to join in. Where I grew up, people waited longer and did not push themselves into a conversation. I feel behind before I even open my mouth, and then I hear myself sounding stiff.",
        "suggestion": "[Self-awareness] I notice curiosity about the cultural adjustment and a pull to coach him socially; I would keep that advice impulse private and stay with my own uncertainty."
      },
      {
        "text": "[Hopeful, then embarrassed] Part of me thinks therapy might actually help. I noticed that after last session I did not replay one meeting as long as usual. Then I felt stupid for getting my hopes up after one small thing. I am telling you because I want to believe it matters, but I also do not want you to think I am making too much of it.",
        "suggestion": "[Self-awareness] I notice warmth and a wish to protect his fragile hope; I would observe the warmth in my chest without turning it into reassurance."
      },
      {
        "text": "[Blank] I keep saying it is fine because that is the fastest way to move past a moment where I feel embarrassed. If I say more, I imagine you noticing how awkward I am, and then I will hear myself talking and want to disappear. So I say fine, and then I hate that I sound like I do not care.",
        "suggestion": "[Self-awareness] I notice my own wish to gently pry under the word fine; I would respect the cover and track the curiosity without pushing."
      },
      {
        "text": "[Quietly] I didn't prepare anything for today. I thought I'd try coming without rehearsing. Now I'm afraid you'll think I haven't made an effort.",
        "suggestion": "[Self-awareness] I notice a wish to reward his effort and fill the space for him. I can let the uncertainty be here without treating it as failure."
      },
      {
        "text": "[Hesitant] I told my friend I was coming here. He said that sounded brave. I keep wondering if you think so too. Sorry, you don't have to answer that.",
        "suggestion": "[Self-awareness] I feel tenderness and pressure to give the right reassurance. I would notice the pressure rather than make his next feeling depend on my approval."
      }
    ],
    "case-laura": [
      {
        "text": "[Ashamed] I tried to cook for myself this week and stood there staring at the pan like I needed someone to tell me each step. It was just eggs, nothing complicated. I kept thinking, What kind of adult cannot manage dinner? Then I heard my ex's voice in my head saying I make everything harder than it needs to be, and I just shut the stove off.",
        "suggestion": "[Self-awareness] I notice tenderness and a rescue impulse around her adult shame; I would track the urge to make the task feel small and stay aware of my sadness."
      },
      {
        "text": "[Sad] My ex dropped off some mail and barely stayed five minutes. He was polite, which somehow made it worse, because there was nothing to be angry at. After he left I cried in the hallway over a person I am supposedly done with. I felt stupid standing there holding envelopes like they were evidence that the marriage was really over.",
        "suggestion": "[Self-awareness] I notice sadness and a wish to comfort her out of the hallway image; I would allow the heaviness in myself without trying to move her past it."
      },
      {
        "text": "[Tense and guarded] I would rather not talk about the past today. I know it probably connects to why I am here, but even saying that makes my arms feel heavy and my vision go a little far away. If you push, I will answer politely and then disappear inside. I have done that with therapists before, and they usually do not notice until I stop coming.",
        "suggestion": "[Self-awareness] I notice pressure to take responsibility and prove I will not push her. I pause and notice that pressure in myself, rather than making a promise to ease my own discomfort."
      },
      {
        "text": "[Flat and guarded] I had two glasses of wine before coming here because otherwise I knew I would sit in the parking lot and drive home. It is not like I am drunk. I can function, and I work around medication and emergencies all day, so I know the difference. I am telling you because I do not want to lie, but I also do not want a lecture.",
        "suggestion": "[Self-awareness] I notice concern and a slight urge to take control; I would name the concern to myself and keep any alarm from becoming shaming."
      },
      {
        "text": "[Distant] When you sound kind, part of me looks for the catch. I know that sounds unfair to you, but kindness usually meant someone wanted something, or it changed when I actually needed them. So when your voice gets soft, I start listening for the part where I am supposed to pay for it. I wish I did not do that.",
        "suggestion": "[Self-awareness] I notice a sting at being mistrusted and a wish to prove my kindness is safe; I would track that wish without asking her to reassure me."
      },
      {
        "text": "[Tense and guarded] Maybe this is just brain chemistry, and I am wasting your time by talking. I can feel myself wanting to make it medical because then it is less personal. If it is just chemistry, no one has to ask about my marriage or my childhood or why I sit in the car before going inside. Maybe I just need the right prescription.",
        "suggestion": "[Self-awareness] I notice an urge to argue for emotional meaning and a fear of colluding with distance; I would bracket both reactions and keep listening."
      },
      {
        "text": "[Worried] Before we start, I need to know whether you are going to make me talk about things before I am ready. My last therapist kept saying we could go slowly, but then every week it somehow came back to the same questions. I would leave feeling like I had handed over pieces of my life and did not know what happened to them afterward.",
        "suggestion": "[Self-awareness] I notice pressure to reassure and differentiate myself from the last therapist; I would track the pressure rather than overpromise safety."
      },
      {
        "text": "[Slow and flat] When therapists push, I shut down and then they act like I am resisting. It is strange, because I can still nod and answer questions, but inside I am gone. Then they write things like guarded or avoidant, and I feel like I have failed therapy by protecting myself. I do not want that to happen here.",
        "suggestion": "[Self-awareness] I notice defensiveness on behalf of therapy and a wish to repair therapists as a group; I would keep that reaction private and stay with my body response."
      },
      {
        "text": "[Tense and guarded] I think I am broken in a way people eventually get tired of. At first they are patient because the story sounds sad, and then they realize I still cannot do normal things like answer messages, sleep through the night, or believe someone is not angry. I am telling you now because I would rather know early if this is too much.",
        "suggestion": "[Self-awareness] I notice sadness and a wish to promise I will always stay. I can hold that wish privately and recognize the pull to promise more than I can honestly offer."
      },
      {
        "text": "[Flat and guarded] Keeping everything controlled feels safer than finding out what is underneath. I can make lists, work extra shifts, keep the house clean enough, and pour a glass of wine at night. None of that is ideal, but it is predictable. If we start opening things up, I do not know what happens after I leave your office.",
        "suggestion": "[Self-awareness] I notice respect for the control and concern about avoidance; I would hold both reactions without letting concern become pressure."
      },
      {
        "text": "[Flat] I'm a nurse. I sit with people who are dying and do what needs doing. Here, being asked whether I'm sad makes me feel strangely useless.",
        "suggestion": "[Self-awareness] I notice admiration for her competence and an urge to explain the difference. I can hold those reactions without hiding my uncertainty behind an explanation."
      },
      {
        "text": "[Guarded] I brought the card you sent after I missed the appointment. I haven't opened it. I don't know whether I want it to be kind or just administrative.",
        "suggestion": "[Self-awareness] I notice a pull to defend the gesture and get her to trust it. I would keep that need to be understood private and notice the tension in my stomach."
      }
    ],
    "case-carlos": [
      {
        "text": "[Beginning of first session] Before we get into it, I need to know whether you understand why respect matters in my family. People hear that word and think ego, but where I come from respect is how you know you are safe and not being made small. If you are going to tell me to just calm down, this will not work. I need to know you get that.",
        "suggestion": "[Self-awareness] I notice a pull to prove cultural competence and avoid sounding dismissive; I would track that pressure and stay humble."
      },
      {
        "text": "[Defensive] My dad would say therapy is for people who cannot handle their business, and I hear him when I sit here. He would laugh at this room, honestly. He handled things with his hands, his voice, his work. I do not want to become him, but I also do not want to sit here like some weak man paying to talk about feelings.",
        "suggestion": "[Self-awareness] I notice defensiveness about the value of therapy and a wish to challenge the weakness rule; I would keep that reaction for myself and notice my breathing."
      },
      {
        "text": "[Tense and angry] If I get soft, people see a weakness and use it against me. That is not a theory; I have watched it happen. A guy lowers his guard, someone jokes, someone tests him, and then everyone knows where to push. So when you ask what I feel under the anger, part of me thinks you are asking me to hand people a weapon.",
        "suggestion": "[Self-awareness] I notice caution and a wish to persuade him that softness can be safe; I would hold the persuasion impulse back and track the tension in me."
      },
      {
        "text": "[Ashamed] I tried fixing the sink and made it worse, and then my wife had to call her brother. He did not say anything disrespectful, but I could feel myself getting hot just watching him work under my sink. I hated needing help with something I should know. I kept joking about it, but inside I wanted to disappear or punch something.",
        "suggestion": "[Self-awareness] I notice a pull to reassure his competence and some alarm around the punch impulse; I would track both without letting alarm take over."
      },
      {
        "text": "[Tense] My wife should show respect first. She knows exactly which tone gets under my skin, then when I react she acts scared and I am the bad guy. I am not saying I am proud of yelling, but I am tired of people acting like I explode out of nowhere. If I apologize first, she runs the whole house from that moment.",
        "suggestion": "[Self-awareness] I notice irritation at the blame and a pull to confront it; I would label that judgment privately so it does not harden my face."
      },
      {
        "text": "[Tense and angry] I keep saying I am not angry, just firm, but everyone backs away. My crew does it, my wife does it, even my son sometimes does it. That makes me more angry because I feel like they are treating me like some monster. Then I hear my voice get louder and I still want them to stop looking at me like that.",
        "suggestion": "[Self-awareness] I notice concern and a wish to soften his impact for him; I would track the concern in my stomach and keep listening."
      },
      {
        "text": "[Angry, clenching fists] After I lost the promotion, I pictured walking into the trailer and punching my supervisor hard enough that he would finally shut up. I am not saying I was going to do it, but the picture was there, clear as day. He kept talking to me like I was nothing, like all the extra hours meant nothing. I drove around for an hour before going home.",
        "suggestion": "[Self-awareness] I notice alarm in my stomach and an urge to take control quickly. I pause to notice that urgency in myself so it does not decide my next response for me."
      },
      {
        "text": "[Worried] I had beers before I came last time because I did not want to sit here feeling exposed. It made it easier to talk, and I do not want you making a whole thing out of it. I work hard, I do not drink in the morning, and I am not like guys who cannot function. But I also know I did not want to be fully here.",
        "suggestion": "[Self-awareness] I notice concern and a pull to educate about substance use; I would keep my voice steady and notice any controlling impulse."
      },
      {
        "text": "[Tense and angry] If someone looks at me wrong, I am going to react before I think. That is what scares me. It is not like I sit there planning to blow up. My body moves first, my mouth moves first, and then everyone is looking at me like I chose it. Sometimes I feel like I am already in the fight before I know I am angry.",
        "suggestion": "[Self-awareness] I notice my own body becoming more alert and a wish to slow him down; I would track that activation as part of the practice."
      },
      {
        "text": "[Defensive] I am only here because my wife wants it, so do not expect some big speech about feelings. I told her I would try, but I am not promising I buy all of this. If you start acting like everything is my fault, I will say it directly. I can respect honesty, but I am not here to be talked down to.",
        "suggestion": "[Self-awareness] I notice a wish to win his cooperation and avoid being attacked; I would name the wish internally and protect my own boundaries."
      },
      {
        "text": "[With a brief smile] My daughter asked me to do her hair before school. I was terrible at it. She laughed, and for once I didn't hear it as someone laughing at me.",
        "suggestion": "[Self-awareness] I notice warmth and surprise at his tenderness. I can notice my assumptions about him rather than turn this into proof that I know who he is."
      },
      {
        "text": "[Challenging] You keep saying we can go slowly. Where I come from, that's what people say when they don't want to deal with you. Are you actually up for this?",
        "suggestion": "[Self-awareness] My chest tightens and I want to prove myself. I can notice the challenge landing in me without letting that pressure set the pace."
      }
    ],
    "case-nina": [
      {
        "text": "[Ashamed] I burned dinner after a long day and ended up crying in the pantry where the boys would not see me. It was such a small thing, but I kept thinking, What kind of mother cannot even manage pasta? Then I remembered my ex saying I make everything chaotic, and I felt like maybe he was right. I know it sounds dramatic.",
        "suggestion": "[Self-awareness] I notice a wish to absolve her quickly and protect her from shame; I would feel that tenderness without rushing to remove it."
      },
      {
        "text": "[Apologetic] I feel guilty sitting here when my family probably needs something. My mother called twice before I came in, and I ignored it because I knew if I answered I would be late. Now I am sitting here thinking about whether she is upset, whether the boys remembered their lunches, whether I am selfish for paying someone to listen to me talk.",
        "suggestion": "[Self-awareness] I notice a pull to reassure her she deserves the time; I would track the impulse to rescue her from guilt and keep breathing low."
      },
      {
        "text": "[Guilty] At church I learned that resentment means I am failing as a good person. I know not everyone sees it that way, and I am not asking you to agree with my faith. But if you do not understand that part of me, I worry you will just tell me to be selfish and call it boundaries. I do not want therapy to turn me into someone my family cannot recognize.",
        "suggestion": "[Self-awareness] I notice assumptions about faith and pressure to show that I understand. I can hold those assumptions privately and recognize what I do not yet know about her experience."
      },
      {
        "text": "[Guilty] If I rest while someone needs me, I feel lazy and selfish. Even when I sit down, I am listening for laundry, dishes, someone asking where something is. My husband tells me to relax, but if I actually relax, things pile up and then I feel worse. I know I sound like I am making excuses, but rest never feels neutral.",
        "suggestion": "[Self-awareness] I notice fatigue in myself and an urge to challenge the rule; I would hold the urge back and track the heaviness she evokes."
      },
      {
        "text": "[Tearful] I can feel tears coming, and I want to apologize so you do not feel burdened. I know you are a therapist and this is probably normal for you, but I still imagine you getting tired of me. People have enough to carry without me adding my mess. So even when I cry, part of me is checking whether it is too much.",
        "suggestion": "[Self-awareness] I notice tenderness at being protected by her and a wish to reassure her. I recognize both as my reactions, without needing her to look after how I feel."
      },
      {
        "text": "[Skeptical] In my family, women keep everyone together. That is not just a sentence; it is how birthdays happen, how sick people get cared for, how children know where they belong. I worry you will not understand why saying no feels wrong. It is easy to say boundaries when you do not have to face the look on everyone's faces afterward.",
        "suggestion": "[Self-awareness] I notice a pull to advocate for her freedom and a fear of minimizing family belonging; I would track both reactions with humility."
      },
      {
        "text": "[Tired] I should be grateful. I have a job, the children are healthy, and I know people deal with much worse. So when I say I am unhappy, I hear this voice telling me I am spoiled and dramatic. Then I feel guilty for even using this time. Maybe I just need to toughen up and stop making my ordinary life into a crisis.",
        "suggestion": "[Self-awareness] I notice a strong wish to validate her suffering and argue with the comparison; I would hold that wish and feel the pressure to convince."
      },
      {
        "text": "[Ashamed] I hate needing help with forms and money. I can manage a classroom full of children, remember everyone's allergies, send birthday gifts, and still stare at one government form until I feel like a child. When I ask my husband for help, he is kind about it, which almost makes it worse. I feel like he sees how incapable I really am.",
        "suggestion": "[Self-awareness] I notice a practical rescue impulse and a wish to restore her dignity. I notice how quickly I want to solve the problem with the form instead of staying attentive to what I am feeling."
      },
      {
        "text": "[Torn] I feel like I am stealing time from people who need help more. Even in the waiting room I looked at someone and thought, They probably have a real reason to be here. I know you will say I am allowed to come, but I do not feel allowed. It feels like I slipped into a line meant for people with actual pain.",
        "suggestion": "[Self-awareness] I notice a strong reassurance impulse and a little ache in my chest; I would observe the impulse to grant permission and not rush into it."
      },
      {
        "text": "[Softly] After the separation, I still set out a cup for him some mornings. It happens before I think, like my hands remember the old routine before my head catches up. Then I notice and feel foolish, so I put it back quickly before the boys see. I do not even know if I miss him or just miss the life making sense.",
        "suggestion": "[Self-awareness] I notice sadness and a wish to protect her from embarrassment. I can hold both privately while listening, without letting my discomfort hurry her past what she is saying."
      },
      {
        "text": "[Brightly] I brought you some cake from the school fair. I know you probably can't accept it. I just didn't want to arrive here needing something again.",
        "suggestion": "[Self-awareness] I notice pleasure at being appreciated and a wish to spare her embarrassment. I would hold that pull privately while staying aware of the boundary."
      },
      {
        "text": "[Smiling through tears] A colleague covered my class so I could come here. She didn't make me explain. I don't think I knew how badly I wanted someone to do that.",
        "suggestion": "[Self-awareness] I feel moved and want to become the person who finally cares for her. I can notice that rescuing wish without making it the centre of our work."
      }
    ],
    "case-aisha": [
      {
        "text": "[Desperate] You did not reply fast when I sent that message about changing the appointment, and I know you probably have rules about messages, but I felt abandoned. Then I felt stupid for caring that much. I kept checking my phone and telling myself I was pathetic. By the time you answered, I wanted to act like I did not care, but I did.",
        "suggestion": "[Self-awareness] I notice a jolt of alarm, guilt in my chest, and a pull to promise faster contact; I would slow down before letting my wish to repair become over-reassurance."
      },
      {
        "text": "[Desperate] If you cancel, I do not think I can come back. I know people get sick or have emergencies, but when someone cancels on me my brain does not treat it like a calendar thing. It feels like I was stupid for trusting them. Then I want to delete their number, hurt myself, or make them prove I matter. I hate that I am telling you this.",
        "suggestion": "[Self-awareness] Fear and protectiveness rise quickly, with pressure to guarantee I will never cancel; I would steady that pressure and keep the boundary honest."
      },
      {
        "text": "[Desperate] Tell me you care about me, because I cannot tell from just sitting here. You look calm, and I know therapists are supposed to look calm, but calm can also mean you are not feeling anything. I need something more than nodding. If you care, why is it so hard to just say it in a way I can believe?",
        "suggestion": "[Self-awareness] I notice the wish to say the perfect caring thing and anxiety about either withholding or giving too much; I would track that bind before choosing words."
      },
      {
        "text": "[Panicked] When the emptiness gets sharp, I want to hurt myself so it stops. I am not saying that to scare you. I am saying it because if I do not say it, I will sit here pretending to be normal and then go home with it. Part of me wants you to react so I know it matters, and part of me is terrified you will overreact and send me away.",
        "suggestion": "[Self-awareness] I feel fear in my stomach and urgency to shift into safety management; I would name the urgency inside so my next step is calm, not panicked."
      },
      {
        "text": "[Desperate] I keep expecting you to leave, and then I hate myself for needing you. It is exhausting because I can hear myself testing you, watching your face, waiting for proof that you are done. Then if you are kind, I feel even more attached and angry. I do not know how to be in this room without making you too important.",
        "suggestion": "[Self-awareness] I feel pulled to prove steadiness and end the testing quickly; I would notice that rescue pressure without making the session about my reliability."
      },
      {
        "text": "[Desperate] I hate you for having that boundary, and please do not leave me. I know that sounds impossible, but that is what it feels like. When you say we have to stop on time, I hear that you are choosing the clock over me. Then I want to scream at you and beg you in the same breath. I hate this.",
        "suggestion": "[Self-awareness] I notice irritation at being hated and tenderness toward the plea; I would let both be present and keep the frame steady."
      },
      {
        "text": "[Panicked] I keep checking whether you are looking at me, because if you look away I panic. Even when you glance at your notes, I feel this drop like I have disappeared. I know you are allowed to write things down, so then I start monitoring whether I am being unreasonable, which only makes me watch you harder. I am barely hearing myself talk because I am trying to read your face for proof I still exist here.",
        "suggestion": "[Self-awareness] I notice pressure to give constant eye contact and a fear that ordinary note-taking will harm her; I would track my performance tension instead of trying to perform perfect presence."
      },
      {
        "text": "[Flirtatious and scared] Sometimes I imagine what it would be like if you met me outside therapy and actually wanted me. I hope you do not freak out. I know this is therapy, but I also notice what you wear and wonder if you ever think I am attractive. Part of me wants you to say no so I can stop hoping, and part of me wants you to hesitate.",
        "suggestion": "[Self-awareness] I notice flattery, alarm, and a wish to hide behind professionalism; I would keep private any personal reaction that does not serve safety and boundary clarity."
      },
      {
        "text": "[Fearful and ashamed] I feel disgusting because of what was done to me. I know people say it was not my fault, and I can repeat that sentence like homework, but it does not touch the feeling. When I imagine you knowing more details, I start watching your face for the smallest change. If you even blink differently, I will think you are trying not to look disgusted, even if you stay kind.",
        "suggestion": "[Self-awareness] I notice grief, protectiveness, and a strong urge to cleanse the shame with reassurance; I would feel the urge and not rush to correct the feeling for her."
      },
      {
        "text": "[Panicked] Promise you will not give up on me, even when I get too much. People always say they will not, and then I watch the moment they start getting tired. I can feel myself becoming that person in here too, the one who asks for too much and ruins it. I need you to promise, but I also know I will not fully believe you.",
        "suggestion": "[Self-awareness] A strong pull comes up to make an absolute promise so her panic drops; I would hold the ache of not being able to promise that way and keep my limits truthful."
      },
      {
        "text": "[Soft, then abrupt] I bought a notebook for things I want to tell you. Then I tore out the first page. I don't want you keeping a list of how much I need you.",
        "suggestion": "[Self-awareness] I notice tenderness and a pull to promise I will never judge her. I can name that pull internally and stay aware of promises I cannot make."
      },
      {
        "text": "[Testing] You say I get to choose what I share. Fine. I'm not telling you anything today. Let's see whether you're still interested when I'm not giving you a crisis.",
        "suggestion": "[Self-awareness] I notice frustration and pressure to produce a useful session. I can hold those reactions privately instead of pulling for a disclosure to relieve my discomfort."
      }
    ],
    "case-david": [
      {
        "text": "[Controlled] Before I invest in this, I need to know whether you are worth my time. I do not mean that as an insult; I evaluate professionals for a living. I have sat with therapists who nodded sympathetically while contributing nothing. If this is going to be another hour of vague feelings language, I would rather know now so we can both use our time efficiently.",
        "suggestion": "[Self-awareness] I notice a sting, a tightening in my chest, and an urge to demonstrate competence; I would let that be my material, not turn the exercise into proving myself."
      },
      {
        "text": "[Dismissive] My success speaks for itself. My wife says I am cold, but she also benefits from the life my standards created. She overreacts when she cannot keep up, and then somehow I am supposed to apologize for being the competent one. I know that sounds arrogant, but I am tired of being punished for functioning better than the people criticizing me.",
        "suggestion": "[Self-awareness] I notice judgment and a wish to debate the arrogance; I would mark that reaction privately so it does not become a hidden counterattack."
      },
      {
        "text": "[Demanding] I need efficient solutions, not a slow tour through my feelings. I have a marriage problem, a reputation problem, and a time problem. If the method is to sit with discomfort until something magical happens, I am skeptical. I am willing to do difficult work, but I need to see that you can distinguish depth from inefficiency.",
        "suggestion": "[Self-awareness] I notice pressure to make EFT sound efficient and impressive. I pause to notice that wish to perform, rather than acting on it to prove the therapy or myself."
      },
      {
        "text": "[Skeptical] Are you actually experienced enough for someone like me, or is this just standard therapy with better branding? I am not trying to be difficult. I have serious issues on the table, including an affair and a marriage that may collapse. I do not want to be someone's learning experience. If you are out of your depth, I would prefer you say so.",
        "suggestion": "[Self-awareness] I notice defensiveness, pride, and anxiety about being evaluated. I can keep those reactions private and notice my breathing without making him manage my worry about competence."
      },
      {
        "text": "[Dismissive] People call me a narcissist because they are jealous or lazy with language. My wife used that word during a fight, and now it has become a convenient way to dismiss anything I say. I want you to say clearly that they are wrong, not do the therapist thing where you pretend to be neutral while quietly agreeing with them.",
        "suggestion": "[Self-awareness] I notice a trap feeling, irritation at the demand, and a pull to look neutral; I would track how easily neutrality could become self-protection."
      },
      {
        "text": "[Dismissive] I do not make mistakes like that; other people drop the ball and then act wounded when I point it out. If I sound harsh, it is because someone has to keep standards from collapsing. My wife says I cannot admit fault, but I admit fault when there is actually fault to admit. I will not perform humility just to make others comfortable.",
        "suggestion": "[Self-awareness] I notice heat in my face and a temptation to argue him into humility; I would keep the power-struggle impulse private and breathe before responding."
      },
      {
        "text": "[Controlled] I expect results quickly, because otherwise this becomes another arena where I am exposed and not improving fast enough. I know that sounds like I am putting pressure on you, and maybe I am, but I put more pressure on myself. I have built my whole life around not needing help for long. If I am going to sit here talking about failure, I need evidence that the discomfort is buying something and that you can tolerate the pressure without getting vague.",
        "suggestion": "[Self-awareness] I notice urgency entering me, plus a wish to provide evidence and relieve the pressure; I would name the urgency internally and protect a steadier pace."
      },
      {
        "text": "[Dismissive] Do not psychoanalyze me or turn me into a case study. I can see people doing that, collecting little clues from my childhood or my marriage and then acting like they have solved me. I am not here to be reduced to a pattern. If you start using jargon to make distance sound profound, I will call it out.",
        "suggestion": "[Self-awareness] I notice a wish to defend clinical language and a fear that my words will sound performative; I would let the fear be known to me without handing it to him."
      },
      {
        "text": "[Skeptical] This better not be like my last therapist, who sat there nodding while nothing changed. I would talk, he would say something soft, and then I would leave with the same marriage and the same problems. I do not need a paid witness. I need someone who can actually think and challenge me without becoming emotional about it.",
        "suggestion": "[Self-awareness] I notice a pull to prove I am active, sharp, and different from the last therapist; I would track the sting of comparison before trying to impress him."
      },
      {
        "text": "[Skeptical] My wife says I drink too much, but she nags me into it. I have a few drinks at night because my job carries pressure she cannot imagine. To be honest, women often do not understand pressure like mine; they talk about stress, but they are not responsible for the livelihoods of hundreds of people. I hope I can be direct here without you getting politically offended.",
        "suggestion": "[Self-awareness] I notice irritation, judgment, and urgency to confront the sexism and alcohol minimization; I would hold those reactions so any boundary or challenge is chosen rather than reactive."
      },
      {
        "text": "[Controlled] I was asked to mentor someone at work. Apparently I'm reassuring. It's odd hearing that when my wife says being near me feels like sitting an exam.",
        "suggestion": "[Self-awareness] I notice wanting to point out the contradiction and make an insight happen. I can pause with that urge and notice my own investment in being incisive."
      },
      {
        "text": "[Coolly] I checked your qualifications again. It isn't personal. If I'm going to let someone see me at my worst, I need to know they aren't learning on me.",
        "suggestion": "[Self-awareness] I feel exposed and want to list my credentials. I can notice that defensive impulse and keep my need to appear impressive out of the response."
      }
    ],
    "case-marcus": [
      {
        "text": "[Slow and flat] I keep saying I am fine because I do not know what else you want from me. Fine is not great, but it is accurate enough. I got up, went to work, came here. That is more than some days. When therapists keep asking what fine means, it starts to feel like they want me to produce something for them, and I do not have much to produce.",
        "suggestion": "[Self-awareness] I notice discomfort with the flatness and a pull to make him produce more; I would track the pull as mine and allow the room to stay sparse."
      },
      {
        "text": "[Hopeless] Talking does not change what happened, and I hate when therapists pretend it does. I have had people nod like they understood, then tell me I need to process it. Process what? The facts are the facts. People died, people left, and I came back different. I am not trying to be difficult. I just do not want another person selling me hope they cannot back up.",
        "suggestion": "[Self-awareness] I notice a sinking feeling and defensiveness on behalf of therapy; I would not sell hope to relieve my own helplessness."
      },
      {
        "text": "[Hypervigilant] Nightmares are just part of it, and I do not want you making a big deal. If I tell you one detail, people usually lean forward like they are waiting for the movie version. Then I have to manage their face while I am already back there. I sleep badly, I wake up checking the room, and then I go to work. That is the whole report.",
        "suggestion": "[Self-awareness] I notice concern, curiosity, and a forward lean in myself; I would use that awareness to stop myself from asking for the movie version of the trauma."
      },
      {
        "text": "[Flat] I prefer to keep to myself because people usually want more than I have. They want answers, emotion, reassurance that I am okay, a version of me that makes them comfortable. Then I have to either perform normal or disappoint them. Alone is simpler. The problem is that alone also gets loud at night, so I am not pretending it works perfectly.",
        "suggestion": "[Self-awareness] I notice loneliness in me and a wish to shorten the distance; I would respect the distance and not move closer to soothe my own ache."
      },
      {
        "text": "[Low voice] Feelings make things worse. Once they start, I lose the rest of the night. People say you have to feel it to heal it, but they do not have to sit in my apartment at 3 a.m. with every sound turned up and my brain replaying things I did not ask for. If I open something here and it follows me home, I am the one who has to deal with it while everyone else sleeps.",
        "suggestion": "[Self-awareness] I notice caution, protectiveness, and a defensive wish to argue for feeling work; I would keep that argument inside and let the safety concern matter."
      },
      {
        "text": "[Quiet and guarded] I do not trust therapists. That is not personal yet. They always want more than I can give, and when I do not give it, they call it avoidance or trauma response. Maybe that is true, but it still feels like a dressed-up way of saying I am not cooperating. If you are going to do that, I would rather know early.",
        "suggestion": "[Self-awareness] I notice the sting of distrust and a pull to explain that I am different; I would keep the explanation impulse private and feel where the sting lands."
      },
      {
        "text": "[Flat] I do not remember much, and I get tense when people push for details. Sometimes I genuinely do not know, and sometimes I know enough to know I do not want to know more in front of another person. Then people ask follow-up questions like they are being careful, but it still feels like digging. I can feel my shoulders getting ready for it right now.",
        "suggestion": "[Self-awareness] I notice curiosity about missing details and my shoulders preparing to lean in; I would use that warning to stop myself from digging."
      },
      {
        "text": "[Hypervigilant] Let us stick to practical tips. Feelings make this too loose, and loose feels unsafe. If there is a plan, I can follow it. If we just start exploring, I have to track you, the door, my body, whatever memory decides to show up, and whether I can still drive home afterward. Structure is not me being difficult. It is how I stay here.",
        "suggestion": "[Self-awareness] I notice relief at the concrete request and concern that structure may avoid emotion; I would hold both reactions without arguing for depth."
      },
      {
        "text": "[Quiet and guarded] On the drive here I saw a truck and thought, If I turned into it, at least the noise would stop. I did not turn. I kept driving. I am saying it because pretending I did not think it seems stupid, but I do not want you to panic or start treating me like I am fragile. I have had thoughts before. I am still here.",
        "suggestion": "[Self-awareness] I notice fear, urgency, and a pull to take over safety; I would steady my body first so I can respond to risk without panic or collapse."
      },
      {
        "text": "[Defensive] I can handle it alone; that is how I have made it this far. People say that like it is a problem, but being able to shut down and keep moving is why I am alive. If therapy means taking that apart, I am not interested. Maybe it costs me something, but depending on people has cost me more. I do not need another person looking sad because I learned how to survive.",
        "suggestion": "[Self-awareness] I notice respect for his independence, sadness about its cost, and a wish to show I am not another person needing something from him; I would track that wish without pushing contact."
      },
      {
        "text": "[Quietly] The neighbour's boy waved at me. I waved back. Stood at the window afterwards. Don't know why I'm telling you that.",
        "suggestion": "[Self-awareness] I notice warmth and an urge to make this into a breakthrough. I can stay with the small moment without asking him to make more of it."
      },
      {
        "text": "[Flat, watching the therapist] People usually go quiet when I say where I served. Then they thank me. I'd rather you didn't do either.",
        "suggestion": "[Self-awareness] I notice uncertainty and a pull toward a socially familiar response. I would acknowledge that uncertainty to myself without making him manage it."
      }
    ]
  },
  "empathic-understanding": {
    "case-sara": [
      {
        "text": "[Tearful] I got through work today, answered emails, smiled in a meeting, and then cried in the car because I missed him so much.",
        "suggestion": "You kept functioning, and then the missing him hit you hard."
      },
      {
        "text": "[Hopeful] I want to believe I can feel better about myself, and for the first time it feels possible to work on that here.",
        "suggestion": "You feel a little hope that this could be a place to work on how you feel about yourself."
      },
      {
        "text": "[Sad] I found an old photo while deleting things from my phone, and it made the breakup feel fresh again.",
        "suggestion": "Finding that photo brought the breakup pain right back."
      },
      {
        "text": "[Angry] I hate that I still check my phone at night, like some part of me is waiting for his name to show up.",
        "suggestion": "You hate that part of you is still waiting for him."
      },
      {
        "text": "[Sad] Mornings are the worst. I wake up for one second before remembering he is gone, and then everything feels heavy.",
        "suggestion": "The morning starts with that heavy remembering that he is gone."
      },
      {
        "text": "[Tearful] My friends keep saying time helps, and I know they mean well, but I feel embarrassed that I am still crying this easily.",
        "suggestion": "You feel embarrassed that the sadness is still so close to the surface."
      },
      {
        "text": "[Softly] I fill the day with errands and little tasks so I do not think, and then at night there is nothing left to distract me.",
        "suggestion": "The busyness holds things off, and the loneliness catches up at night."
      },
      {
        "text": "[Embarrassed] When friends ask how I am, I make a joke or change the subject because I do not want to be the heavy one again.",
        "suggestion": "You hide the heaviness so you do not become the heavy one again."
      },
      {
        "text": "[Tearful] I passed a couple holding hands outside the grocery store, and it felt like everyone else got picked for a life I lost.",
        "suggestion": "Seeing them touched that feeling of being left out of the life you wanted."
      },
      {
        "text": "[Softly] Part of me keeps going over conversations, trying to find the moment he decided I was not worth staying with.",
        "suggestion": "You keep searching for the moment he stopped wanting to stay."
      },
      {
        "text": "[Sad] I still set out two plates sometimes. Then I put one back before I sit down. Dinner is the loneliest part of the day.",
        "suggestion": "Sitting down to dinner brings home how much you miss having him there."
      },
      {
        "text": "[Relieved] I spent an afternoon with my sister and actually enjoyed it. For a few hours I wasn't trying to work out what I did wrong.",
        "suggestion": "It was a relief to enjoy being with her without blaming yourself for a while."
      }
    ],
    "case-michael": [
      {
        "text": "[Firm] I spent the whole morning fixing other people's mistakes at work, and by lunch I was fed up with everyone needing me to clean things up.",
        "suggestion": "You were tired and fed up with having to put everyone else's mistakes right."
      },
      {
        "text": "[Ashamed] My wife said she is tired of walking on eggshells around me, and hearing that made me feel ashamed.",
        "suggestion": "Hearing that she walks on eggshells left you ashamed."
      },
      {
        "text": "[Ashamed] After I yelled last night, I saw her flinch, and then I felt sick with shame.",
        "suggestion": "Seeing her flinch after you yelled left you sick with shame."
      },
      {
        "text": "[Tense and angry] When someone questions my decision in a meeting, I can feel my anger come up before I have even answered.",
        "suggestion": "Being questioned in front of others brings anger up fast."
      },
      {
        "text": "[Embarrassed] Someone asked a simple question I could not answer today, and I felt exposed in front of the whole room.",
        "suggestion": "Not having the answer left you feeling exposed in front of everyone."
      },
      {
        "text": "[Tense] I stayed up past midnight fixing slides because I could not stand the thought of someone catching me unsure in the morning.",
        "suggestion": "You were afraid they would see you unsure, so it felt hard to stop preparing."
      },
      {
        "text": "[Firm] My wife's tone changes a little, and I am already bracing before I know what she is actually trying to say.",
        "suggestion": "Her tone makes you brace before you even know what she means."
      },
      {
        "text": "[Tense and ashamed] I know I should apologize, but the second I do, it feels like I am handing her proof that I am weak.",
        "suggestion": "Apologizing feels like exposing weakness."
      },
      {
        "text": "[Tense] I tell myself I am only holding people to a standard, but underneath that I feel accused and cornered.",
        "suggestion": "You call it holding standards, and underneath you feel accused."
      },
      {
        "text": "[Ashamed] At night I replay what I said to my wife, especially the look on her face, and I feel awful.",
        "suggestion": "At night you replay her face and feel awful about what happened."
      },
      {
        "text": "[Frustrated] The deadline changed again. I spent the whole weekend finishing the report, and now it's as if that effort didn't count.",
        "suggestion": "You're frustrated that you gave up your weekend and your effort seems to count for nothing."
      },
      {
        "text": "[Disappointed] My son asked his uncle to come to the school thing, not me. I know I've been busy. It still hurt being the one he didn't ask.",
        "suggestion": "You understand that you've been busy, and it still hurts that he chose someone else."
      }
    ],
    "case-jason": [
      {
        "text": "[Quietly] I am tired of sitting in meetings with my heart racing while everyone else seems normal.",
        "suggestion": "You are tired of feeling so anxious while everyone else seems at ease."
      },
      {
        "text": "[Sad] I ate lunch alone again today and watched people at another table laughing like it was easy.",
        "suggestion": "Eating alone while others connected left you sad."
      },
      {
        "text": "[Fearful] I wanted to say yes to game night, and then the fear kept building until I made an excuse and cancelled.",
        "suggestion": "You wanted to go, and the fear grew until you backed out."
      },
      {
        "text": "[Quietly] When someone compliments my work, I smile, but inside I wait for them to realize they were wrong.",
        "suggestion": "The compliment does not land, and you expect it to be taken back."
      },
      {
        "text": "[Hesitant] I rewrote a simple text six times today because every version sounded weird once I looked at it.",
        "suggestion": "Even a simple text turns into anxiety and second-guessing."
      },
      {
        "text": "[Anxious] I eat lunch at my desk because walking into the break room feels like stepping onto a stage.",
        "suggestion": "Walking into the break room feels exposing, so you stay where you feel less on show."
      },
      {
        "text": "[Quietly] After I say something in a meeting, I spend the rest of the afternoon replaying it and cringing.",
        "suggestion": "After speaking, you replay it and feel embarrassed."
      },
      {
        "text": "[Hesitant] In groups I go quiet so fast, and then I feel outside the circle even before anyone has left me out.",
        "suggestion": "You go quiet and feel outside the group before anyone has said anything."
      },
      {
        "text": "[Trembling] When I had to introduce myself today, my hands shook, and I wanted the floor to open up.",
        "suggestion": "Introducing yourself brought shaking and a wish to disappear."
      },
      {
        "text": "[Tearful] Sunday nights are hard because I realize no one is expecting to hear from me before the week starts again.",
        "suggestion": "Sunday nights leave you painfully aware that no one is waiting to hear from you."
      },
      {
        "text": "[Worried] There's a team lunch tomorrow. I'm already thinking about where to sit and whether anyone will talk to me.",
        "suggestion": "You're worried about finding a place at the lunch and being left on your own."
      },
      {
        "text": "[Pleased] Someone at work remembered something I'd told them last week. I felt glad they remembered me. It made the day easier.",
        "suggestion": "Being remembered made you feel glad and helped you feel a little more at ease."
      }
    ],
    "case-laura": [
      {
        "text": "[Slow and flat] I can get through a whole shift at the hospital, talk to patients, answer my kids' messages, and still feel like I am watching it all from far away.",
        "suggestion": "You manage work and family, but feel distant from what is happening, as though you are watching rather than taking part."
      },
      {
        "text": "[Worried] Since the divorce, I sit with the bills after work and keep adding the numbers again, wondering if I can keep the house or if I am pretending.",
        "suggestion": "Sitting with the bills brings the worry that the house may be slipping out of reach."
      },
      {
        "text": "[Tense and guarded] When someone is kind to me, even in a small way, I notice myself stepping back before I know whether I actually want the kindness.",
        "suggestion": "Small kindness reaches you, and you step back into guardedness before you know whether you want it."
      },
      {
        "text": "[Confused] I have been feeling depressed again, but nothing dramatic happened this week. Work was normal, the kids are fine, and I still feel like something dropped out from under me.",
        "suggestion": "Everything looks normal on the outside, and inside you feel depressed, confused, and dropped down."
      },
      {
        "text": "[Slow and flat] I tell myself I want closeness, and then when someone actually asks me to come over or stay longer, I go blank and start planning how to leave.",
        "suggestion": "You long for closeness, and when it gets close enough to touch, you go blank and look for distance."
      },
      {
        "text": "[Sad] A friend stopped inviting me over after I cancelled too many times. Part of me is relieved not to explain myself, but I also feel sad when I see her with other people.",
        "suggestion": "You are relieved not to have to explain yourself, and sad that she no longer invites you."
      },
      {
        "text": "[Flat and guarded] I wake up tense before I even open my eyes, listening for whether something is wrong in the house, even though I live alone now.",
        "suggestion": "You wake already braced, listening for trouble in an empty house."
      },
      {
        "text": "[Fearful] I avoid movies with fighting because one raised voice can make me feel scared before I can remind myself it is only a scene.",
        "suggestion": "A raised voice on screen brings fear before you can remind yourself it is only a scene."
      },
      {
        "text": "[Tired] I keep trying to be normal at work, smiling and checking on everyone, but by the end of a shift I sit in the car because I am too worn out to drive home.",
        "suggestion": "Holding the normal face and caring for everyone leaves you too worn out to go home."
      },
      {
        "text": "[Confused] I am not sure what I should talk about here. I could talk about sleep, the divorce, work, or my childhood, but mostly I just know I do not feel like myself.",
        "suggestion": "There are several possible starting points, and underneath them is the sense that you are not yourself."
      },
      {
        "text": "[Flat, with a sigh] The bill came addressed to both of us again. I know it's a mistake. I'm still tired of being reminded, and then feeling nothing when I think I should be upset.",
        "suggestion": "You're worn down by the reminder, and troubled that the sadness you expect isn't there."
      },
      {
        "text": "[Quiet] A friend offered to come over. I wanted company, then felt uneasy about having someone in my flat. I said no and regretted it all evening.",
        "suggestion": "You wanted her company, but letting her into your space felt uneasy, and afterwards you regretted being alone."
      }
    ],
    "case-carlos": [
      {
        "text": "[Hopeless] My wife and I keep having the same fight about my temper, and by the end we are both saying the same things as last time. Nothing changes no matter how hard I try.",
        "suggestion": "The same fight keeps repeating until you feel worn down and hopeless."
      },
      {
        "text": "[Ashamed] I hate remembering the moment my son watched me slam that door. He went quiet so fast, and now I keep seeing his face when I try to sleep.",
        "suggestion": "Your son's quiet face after the door slammed stays with you as shame."
      },
      {
        "text": "[Angry] My brother promised to help with the kids and then disappeared again. I had counted on him, and when he did not answer, I was furious.",
        "suggestion": "You counted on him, and his disappearing left you furious and let down."
      },
      {
        "text": "[Worried] I am worried that if I lose one more job over my temper, my family will not recover. I keep doing the math in my head and seeing everything fall apart.",
        "suggestion": "One more blowup at work feels like it could make everything fall apart for your family."
      },
      {
        "text": "[Ashamed] After I blow up, everyone gets quiet and careful around me. That silence makes me feel like I have become exactly the man I said I would never be.",
        "suggestion": "Their careful silence after you blow up leaves you ashamed of the man you seem to become."
      },
      {
        "text": "[Tense] When things get calm after a fight, I feel nervous instead of relaxed. I start waiting for the next thing someone is going to say.",
        "suggestion": "Even when the fight is over, you feel tense, waiting for what someone will say next."
      },
      {
        "text": "[Sad] My father is gone, and I still get angry that he never once said he was proud of me. It sounds stupid to want that now, but it still gets to me.",
        "suggestion": "Even after his death, the missing words still leave you hurt and angry."
      },
      {
        "text": "[Confused] I know yelling scares my family, but in the moment it feels like the only way anyone hears me. Then afterward I hate that I used the one thing that makes them back away.",
        "suggestion": "In the moment yelling feels like being heard, and afterward it hurts that it pushes them away."
      },
      {
        "text": "[Angry, clenching fists] I punch walls instead of people, and part of me thinks that should count for something. But I hate that it still scares them.",
        "suggestion": "The wall feels like holding back from worse, and it still hurts that it scares them."
      },
      {
        "text": "[Ashamed] I want my family to feel safe with me. When they still flinch at my voice, it feels like proof that I have already damaged something.",
        "suggestion": "You want them to feel safe with you, and their flinching lands as proof that something is already damaged."
      },
      {
        "text": "[Angry, then quieter] He changed my crew's plan without asking me. I got angry. Afterwards I was embarrassed that the lads saw how quickly he got to me.",
        "suggestion": "You're angry that he overruled you, and embarrassed that everyone saw how much it affected you."
      },
      {
        "text": "[Low voice] My daughter went quiet when I came into the kitchen. I hadn't even said anything. That hurt more than another argument would have.",
        "suggestion": "It hurts that your presence alone made her go quiet."
      }
    ],
    "case-nina": [
      {
        "text": "[Tired] Asking for help makes me feel guilty, even when I am exhausted. I start explaining why it is not really a big deal before anyone has even answered.",
        "suggestion": "You feel guilty as soon as you ask for help, and start playing down how much you need it."
      },
      {
        "text": "[Worried] The car repair bill came, and I do not know how we are going to make it through the month. I keep moving money around in my head and feeling more overwhelmed.",
        "suggestion": "The repair bill leaves you moving numbers around and feeling more overwhelmed about the month."
      },
      {
        "text": "[Torn] When I say no, my stomach knots while I picture everyone disappointed. Then I start explaining so much that the no almost disappears.",
        "suggestion": "Saying no knots your stomach, and all the explaining nearly erases the no."
      },
      {
        "text": "[Sad] My sister forgot my birthday again, and I keep telling myself it should not matter because she is busy. But I was waiting for the message all day.",
        "suggestion": "Her forgetting hurts, and you keep trying to talk yourself out of that hurt."
      },
      {
        "text": "[Apologetic] When I sit down to rest, I feel guilty within seconds. I start noticing dishes, laundry, messages, anything that proves I should get back up.",
        "suggestion": "Rest lasts only seconds before guilt starts listing reasons to get up again."
      },
      {
        "text": "[Confused] I have been more depressed lately, but the boys are fine and work is fine, so I feel silly saying it. I keep thinking I should be grateful, not crying in the bathroom.",
        "suggestion": "Things look fine from the outside, while you feel confused, depressed, and alone with the tears."
      },
      {
        "text": "[Ashamed] I explode sometimes, usually over something small, and then I feel awful for becoming the angry one after trying so hard to be patient.",
        "suggestion": "After trying so hard to be patient, exploding leaves you ashamed of becoming the angry one."
      },
      {
        "text": "[Guilty] I dream about someone taking care of me for once, bringing me tea or telling me to lie down, and then I feel selfish for wanting it.",
        "suggestion": "The wish to be cared for is there, and then the wanting itself starts to feel selfish."
      },
      {
        "text": "[Angry] A friend cancelled lunch at the last minute, and I texted that it was completely fine. Then I felt angry for the rest of the afternoon.",
        "suggestion": "You sent the fine reply and then carried the anger and disappointment by yourself."
      },
      {
        "text": "[Tired] I do not know what to talk about today. There are too many small things, and I was hoping you could help me find where to start.",
        "suggestion": "You feel tired and unsure where to begin with so many small things piled together."
      },
      {
        "text": "[Weary] I helped everyone else get ready for the holiday. By the time we left, I didn't care where we were going. I just wanted nobody to need me for a day.",
        "suggestion": "You're so worn out from caring for everyone that what you long for is a day without demands."
      },
      {
        "text": "[Hurt, apologetic] They thanked the whole team at the school meeting, but left my name out. I know it wasn't deliberate. I still felt overlooked, and silly for caring.",
        "suggestion": "You felt overlooked, even knowing it wasn't deliberate, and then judged yourself for being hurt."
      }
    ],
    "case-aisha": [
      {
        "text": "[Panicked] If you look away while I am talking, even to check a note, I panic that you are losing interest. Then I start talking faster, adding details, anything to keep you with me.",
        "suggestion": "When I look away, you panic that I am losing interest and try harder to keep my attention."
      },
      {
        "text": "[Panicked] When a text does not come, my chest locks and I cannot breathe. I keep checking even though I know checking will not make it arrive, and each empty screen makes it worse.",
        "suggestion": "The unanswered text locks your chest, and every empty check makes the panic worse."
      },
      {
        "text": "[Desperate] I hear myself begging 'don't leave,' and then suddenly I am yelling like I hate them. Afterward I cannot explain how I went from needing them so badly to attacking them.",
        "suggestion": "You move from desperately needing them close to attacking them, and afterward the shift feels impossible to explain."
      },
      {
        "text": "[Confused] I do not know what to talk about today; I woke up feeling wrong, checked my phone too many times, and cannot tell if I am sad or angry.",
        "suggestion": "You are unsure where to begin with a wrong feeling that will not sort into sad or angry."
      },
      {
        "text": "[Worried] I am trying not to scratch, but when the panic gets that loud, my hands start moving before I have words for what is happening.",
        "suggestion": "The panic outruns words and moves into your hands while you are trying not to scratch."
      },
      {
        "text": "[Desperate] If someone cancels, I want to quit before they can leave again. Part of me knows they may have a real reason, but another part is already packing up and disappearing first.",
        "suggestion": "A cancellation feels like being left again, and part of you wants to disappear first."
      },
      {
        "text": "[Ashamed] I hate myself after I blow up, even when I was terrified first; I keep replaying what I said and feeling disgusting.",
        "suggestion": "After you blow up, the replay turns into disgust with yourself, even though terror came first."
      },
      {
        "text": "[Ashamed] I test people to see if they care, and then I hate myself for needing proof; reassurance does not last very long.",
        "suggestion": "You need proof that people care, and then shame comes when the reassurance fades so quickly."
      },
      {
        "text": "[Desperate] When a session ends, the room tilts and I feel dizzy and left; I know the hour is over, but my body does not know that.",
        "suggestion": "The session ending feels like being left, even while one part knows the hour is over."
      },
      {
        "text": "[Scared] I am scared that if I stop chasing people, there will be nothing left of me. Without the crisis, without trying to get someone back, I do not know who I am.",
        "suggestion": "Without the chase and the crisis, you fear there may be no clear sense of you left."
      },
      {
        "text": "[Upset, speaking quickly] I wanted him to stay, but I told him to leave because I was ashamed of begging. Now I'm alone and angry that he listened.",
        "suggestion": "You wanted him close, pushed him away in shame, and now feel alone and angry that he went."
      },
      {
        "text": "[Low voice] When things are calm, I don't know who I am. I'm relieved nobody is leaving, but I feel empty and almost miss having something to fight about.",
        "suggestion": "The calm brings relief, but also an emptiness that leaves you unsure of who you are."
      }
    ],
    "case-david": [
      {
        "text": "[Controlled] When my wife calls me cold, I bristle because it sounds too close to true. Then I get angry at her for noticing the exact thing I am trying not to see.",
        "suggestion": "Being called cold feels painfully close to the truth, and you get angry that she has noticed what you try not to see."
      },
      {
        "text": "[Frustrated] I know my father was impossible to please, but knowing that does not change how worthless I feel when I imagine his face.",
        "suggestion": "You know he was impossible to please, and still imagining his face brings up worthlessness."
      },
      {
        "text": "[Defensive] When I feel criticized, I start listing everything I have achieved, because otherwise I feel exposed and ridiculous.",
        "suggestion": "Criticism leaves you feeling exposed, and achievements rush in to cover that feeling."
      },
      {
        "text": "[Controlled] Praise feels good, then it leaks out; by the next day I need more proof that I still matter.",
        "suggestion": "Praise feels good for a moment, then drains away and leaves you needing proof again."
      },
      {
        "text": "[Dismissive] When I admit I am wrong, I feel stripped down and small, so I argue even when part of me knows I caused damage.",
        "suggestion": "Admitting you are wrong leaves you stripped down and small, even when part of you knows there was damage."
      },
      {
        "text": "[Wounded but sharp] When my kids cry, I get impatient, and then I hate how hard I sound when I see them pull away.",
        "suggestion": "You get impatient with their tears, then hate how harsh you sound when they pull away."
      },
      {
        "text": "[Wounded but sharp] Since the affair came out, being at home makes me feel like a failure; even ordinary rooms feel like evidence against me.",
        "suggestion": "Since the affair came out, home itself feels like evidence that you have failed."
      },
      {
        "text": "[Worried] I have been drinking more after work because it is the only time I stop feeling anxious and stop hearing my wife's disappointment in my head.",
        "suggestion": "Drinking quiets the anxiety and your wife's disappointment for a while."
      },
      {
        "text": "[Confused] I do not know what we should talk about this week; if I choose, I will probably choose the thing that makes me look least exposed.",
        "suggestion": "Choosing what to talk about feels risky, with the pull to choose the least exposed version."
      },
      {
        "text": "[Wounded but sharp] If I am just ordinary at something, I feel like I disappear; I would rather not try than be average in front of people.",
        "suggestion": "Being ordinary feels like disappearing, and being average in front of people feels unbearable."
      },
      {
        "text": "[Controlled, bitter] They still ask my advice, but they gave the lead role to someone else. I can look gracious. Privately, I feel humiliated every time they praise him.",
        "suggestion": "You can appear gracious while feeling humiliated each time his success is acknowledged."
      },
      {
        "text": "[Quietly] My wife says she'd like an evening where neither of us achieves anything. I want that too, but without something to offer I feel oddly worthless.",
        "suggestion": "You want an evening together, yet having nothing to achieve or offer leaves you feeling worthless."
      }
    ],
    "case-marcus": [
      {
        "text": "[Slow and flat] Most days I complete the routine and feel almost nothing behind my face. People speak to me, and I answer after a delay, like the words have to travel too far.",
        "suggestion": "You get through the day feeling numb, and even answering people feels slow and distant."
      },
      {
        "text": "[Confused] I do not know what to talk about today; if I choose something, I am afraid we will open more than I can handle.",
        "suggestion": "Choosing where to start feels unsafe, like it might open more than you can handle."
      },
      {
        "text": "[Hypervigilant] Nightmares leave me wired and empty, like the room is not safe; I sit up listening before I remember where I am.",
        "suggestion": "Nightmares leave you wired and empty, listening before you fully know where you are."
      },
      {
        "text": "[Slow and flat] I avoid people because it feels safer than explaining why I disappear, and then I sit alone and feel worse.",
        "suggestion": "Avoiding people feels safer than explaining yourself, and then the aloneness gets worse."
      },
      {
        "text": "[Worried] I have been drinking after work so I can sleep, and now I am worried I cannot sleep without it. I hate that something I do not trust has started to feel necessary.",
        "suggestion": "Alcohol has started to feel necessary for sleep, and you hate feeling dependent on it."
      },
      {
        "text": "[Quiet and guarded] When something good happens, it feels far away, like it belongs to someone else; I know what expression I am supposed to have.",
        "suggestion": "Good things happen, but you feel little connection to them, even when you know how you are expected to react."
      },
      {
        "text": "[Flat] A door slam can throw me back before I know where I am; afterward I feel embarrassed that a normal sound did that.",
        "suggestion": "A sudden door slam throws you back before you can place yourself, and afterward you feel embarrassed."
      },
      {
        "text": "[Sad] A friend from the unit stopped calling, and I keep telling myself I did not want to talk anyway. But I still check the phone, and the silence bothers me.",
        "suggestion": "You tell yourself you did not want contact, and still the silence bothers you."
      },
      {
        "text": "[Hopeless] Some nights I think nobody would notice if I did not wake up; I do not plan anything, I just feel that invisible.",
        "suggestion": "Those nights you feel so invisible that not waking up seems like it would pass unnoticed."
      },
      {
        "text": "[Scared] I want to let people in, but every time someone gets close, I start looking for the exit. Then I end up alone again and hate that too.",
        "suggestion": "You want closeness, fear sends you toward the exit, and then the aloneness hurts too."
      },
      {
        "text": "[Flat] I remember his birthday every year. Don't call anyone. I miss him, but speaking about him feels worse than keeping quiet.",
        "suggestion": "You miss him and carry the date alone because speaking about him feels even harder."
      },
      {
        "text": "[Guarded] I want to sleep without checking the door. When I don't check, I feel careless. When I do, I feel trapped in the same routine.",
        "suggestion": "You want rest, but feel careless if you don't check and trapped in the routine if you do."
      }
    ]
  },
  "empathic-affirmation-validation": {
    "case-sara": [
      {
        "text": "[Softly] Before bed I keep checking his social media even though it wrecks me.",
        "suggestion": "That pull toward his page fits with how fresh the loss is; each trace offers contact and hurts at the same time."
      },
      {
        "text": "[Embarrassed] I smiled through the whole team meeting and then cried in the bathroom afterward.",
        "suggestion": "Anyone would need room for tears after holding themselves together through that meeting; the tears deserve room rather than embarrassment."
      },
      {
        "text": "[Tearful] When I think about the last weeks, I keep wondering if he'd have stayed if I had been more fun or easier.",
        "suggestion": "When someone you wanted to stay has left, it is understandable to search for what you could have done differently. There is room for the hurt without making it all your fault."
      },
      {
        "text": "[Softly] At night it gets too quiet, and I start feeling like I was never really wanted.",
        "suggestion": "After losing someone who mattered, a quiet evening can bring a very painful loneliness. Feeling unwanted in that moment does not make your need for company unreasonable."
      },
      {
        "text": "[Angry, then embarrassed] A friend told me to stop checking my phone, and I snapped at her.",
        "suggestion": "Being told to stop can hurt when you are still struggling with the loss. Your anger deserves room, even while how you speak to your friend matters too."
      },
      {
        "text": "[Tearful] When I wake up, I forget for a second and then it slams me.",
        "suggestion": "Understandably, waking into the loss again is a harsh start to the day; there is no time to protect yourself before it lands."
      },
      {
        "text": "[Tearful] I apologize when I start crying, like my sadness is taking up too much room.",
        "suggestion": "You are grieving someone important, and it is understandable that tears come. Your sadness can have room here; you do not need to apologize for feeling it."
      },
      {
        "text": "[Embarrassed] I feel guilty for being this upset when I am only dealing with a breakup and other people have bigger problems.",
        "suggestion": "Comparing losses can make grief feel illegitimate, but being left is still a real wound."
      },
      {
        "text": "[Fearful] My friends say I should come out for dinner, but I am scared I will cry at the table.",
        "suggestion": "Dinner would put a private sadness in public view; fear of crying there is a reasonable wish to protect something tender."
      },
      {
        "text": "[Softly] After this breakup, part of me thinks love must be for other people, not me.",
        "suggestion": "Being left can make it painful to imagine trusting love again. That hurt is understandable; there is room for it without treating the thought as a verdict on your future."
      },
      {
        "text": "[Embarrassed] I asked my sister to stay for dinner because I didn't want another evening alone. I'm an adult. I shouldn't need someone just to get through a Tuesday.",
        "suggestion": "After losing the person you shared your evenings with, wanting company on an ordinary Tuesday is an understandable need, not something to be ashamed of."
      },
      {
        "text": "[Guilty] I enjoyed a whole afternoon without thinking about him. Then I felt disloyal, as if having a good time meant our relationship hadn't mattered.",
        "suggestion": "Enjoying an afternoon doesn't erase what the relationship meant. It's understandable to feel protective of something that mattered so much to you."
      }
    ],
    "case-michael": [
      {
        "text": "[Guilty] I hit a cyclist with my car last week. The road was slick, but he still broke his wrist and I cannot stop feeling guilty.",
        "suggestion": "Someone was hurt in an accident you were involved in, so your guilt is understandable. We can take that feeling seriously without deciding from it alone how much was your responsibility."
      },
      {
        "text": "[Defensive] In meetings, if I don't have the answer, I feel exposed and I bluff.",
        "suggestion": "Not having an answer in front of the team can feel exposing, especially when you want to be seen as capable. That discomfort is understandable; it does not require pretending to know."
      },
      {
        "text": "[Tense] When I apologize, it feels like kneeling in front of someone who will use it against me.",
        "suggestion": "If an apology feels as though it could be used against you, it is understandable to feel wary. That fear can be acknowledged alongside taking responsibility for your part."
      },
      {
        "text": "[Firm] At home, when my wife sighs or rolls her eyes, I go off before I think.",
        "suggestion": "A sigh or an eye roll can hurt when you hear it as dismissal. The hurt and anger are understandable; they do not excuse frightening or lashing out at your wife."
      },
      {
        "text": "[Furious] Watching the news, I get so angry at people in charge acting like consequences are optional.",
        "suggestion": "Seeing people with power avoid consequences can understandably make you angry when fairness matters to you. That concern deserves to be taken seriously."
      },
      {
        "text": "[Ashamed] When my kid asks why I am angry, I feel like the worst father.",
        "suggestion": "Your child's question hurts because being a safe father matters to you. That pain is understandable; taking responsibility for the anger does not mean condemning yourself as the worst father."
      },
      {
        "text": "[Firm] Slamming a door feels awful later, but in the moment it keeps me from feeling small.",
        "suggestion": "Feeling small can hurt, and wanting to get away from that feeling is understandable. We can respect the pain without treating slamming a door as the only way to respond to it."
      },
      {
        "text": "[Defensive] If someone challenges me in front of the team, I double down even if I'm wrong.",
        "suggestion": "Being questioned in front of the team can feel embarrassing when your judgment matters to you. That discomfort is understandable, even when the other person has a valid point."
      },
      {
        "text": "[Ashamed] I hate that I need help with anger; it makes me feel weak.",
        "suggestion": "If you have been taught that needing help is weakness, asking for it can feel exposing. That shame is understandable; needing support does not make you less worthy of respect."
      },
      {
        "text": "[Ashamed] After I blow up at home, I lie awake replaying their faces and hating myself.",
        "suggestion": "Seeing that your family was frightened can bring painful regret, especially when their safety matters to you. That pain deserves attention alongside responsibility for what happened, rather than only attacking yourself."
      },
      {
        "text": "[Ashamed] The project went well, but I still wanted my boss to say he was pleased. I hate needing that. I should know for myself whether I've done a decent job.",
        "suggestion": "When being approved of has mattered so much, wanting to hear that your effort was valued is understandable. That wish doesn't cancel your ability to judge your own work."
      },
      {
        "text": "[Uncomfortable] I was scared before the meeting, not angry. Nothing bad even happened. It seems ridiculous to be nervous about people I see every day.",
        "suggestion": "If a meeting feels like a place where you could be criticised, nervousness is understandable even among familiar people. You don't have to dismiss it because the meeting went well."
      }
    ],
    "case-jason": [
      {
        "text": "[Trembling] Every presentation at work makes my hands shake, and then I feel pathetic for caring so much.",
        "suggestion": "Speaking while others watch can feel frightening when their judgment matters so much. It is understandable that you feel anxious; shaking does not make you pathetic for caring."
      },
      {
        "text": "[Hesitant] I keep my eyes on the floor so no one has a reason to look at me.",
        "suggestion": "It is understandable that being looked at feels risky when you expect people to laugh at you. There is room for that fear without judging you for looking down."
      },
      {
        "text": "[Anxious] At team lunches, I pretend to text so I have somewhere to hide during small talk.",
        "suggestion": "Small talk can feel exposing when you are worried about being judged. Wanting some relief from that anxiety is understandable; it does not make you a flawed person."
      },
      {
        "text": "[Quietly] When people laugh politely after I say something, I assume they are trying to escape me.",
        "suggestion": "Not knowing what their laughter means can feel unsettling when you fear being unwanted. That worry is understandable, even though the laughter does not tell us for certain what they think."
      },
      {
        "text": "[Hesitant] Compliments bounce off; part of me wants to believe them, but the suspicious part wins.",
        "suggestion": "It can feel difficult to trust praise when you are so used to finding fault with yourself. That hesitation is understandable, even while you wish you could believe the compliment."
      },
      {
        "text": "[Quiet and ashamed] After I talk in a group, I replay every sentence and feel ashamed for sounding awkward.",
        "suggestion": "Speaking in a group can feel exposing when belonging matters so much to you. It is understandable to feel self-conscious afterwards; you do not deserve to be attacked for trying to join in."
      },
      {
        "text": "[Quiet and ashamed] I skipped another team lunch and then felt pathetic for hiding in my apartment.",
        "suggestion": "When joining others feels frightening, wanting to stay home is understandable. Feeling disappointed about missing out can be here too; neither feeling makes you pathetic."
      },
      {
        "text": "[Hesitant] I scan every room for who is doing better than me, then feel defective.",
        "suggestion": "Comparing yourself with everyone in the room can be painful when you already doubt whether you belong. That pain is understandable; it is not proof that you are defective."
      },
      {
        "text": "[Nervous, almost smiling] Someone invited me to a game night, and I wanted to go for about ten seconds before panic took over.",
        "suggestion": "No wonder panic rushed in; that same invitation touched both the ten-second hope for connection and the fear of exposure."
      },
      {
        "text": "[Quietly] Some nights I lie there certain I will always be alone because I am too awkward to love.",
        "suggestion": "Longing for company while fearing you will always be alone can make nights very painful. That loneliness deserves care, rather than being treated as proof that you cannot be loved."
      },
      {
        "text": "[Apologetic] I left the team lunch early. It was nice being invited, but keeping up with everyone exhausted me. I feel ungrateful saying that.",
        "suggestion": "You can appreciate being invited and still find the conversation exhausting. With how much effort it takes to feel at ease, needing a break is understandable."
      },
      {
        "text": "[Quietly angry] They kept talking over me. I know they probably didn't notice, but I was angry afterwards. It feels petty when I hardly said anything anyway.",
        "suggestion": "Being talked over can hurt even when it isn't deliberate. It makes sense that you felt angry about not having room to speak, rather than that anger being petty."
      }
    ],
    "case-laura": [
      {
        "text": "[Flat and ashamed] On days off I can stay in bed until noon, not exactly sleeping, just not able to start. Then I tell myself I am lazy because other people manage normal mornings.",
        "suggestion": "When even starting the day feels beyond you, getting out of bed can be a real struggle. That difficulty deserves care; comparing yourself with other people's mornings does not make you lazy."
      },
      {
        "text": "[Fearful] If voices rise, my stomach drops and I go somewhere else in my head.",
        "suggestion": "Given what raised voices have meant in your life, it is understandable that they frighten you. Feeling far away in that moment deserves attention without blaming you for it."
      },
      {
        "text": "[Guarded and confused] A man from work asked if I wanted coffee, and I felt a tiny bit pleased before I went completely numb. I keep telling myself that is ridiculous at my age.",
        "suggestion": "Wanting company and feeling uneasy about closeness can both be understandable after what you have been through. Being pleased, or then feeling numb, is not ridiculous because of your age."
      },
      {
        "text": "[Flat and guarded] I take long showers because warm water feels safer than asking anyone for comfort.",
        "suggestion": "Small, safe warmth can feel deeply important when human comfort has been dangerous or unreliable."
      },
      {
        "text": "[Sad] I like the new apartment, but when I unpacked the photos from the old house, I missed the version of my family I kept hoping we would become.",
        "suggestion": "The grief belongs to what this move carries: not only a new start but the loss of the home and family you kept trying to have."
      },
      {
        "text": "[Tense and guarded] Being touched, even kindly, startles me, and then I feel broken for reacting that way.",
        "suggestion": "When touch has not always felt safe, being startled by it is understandable, even if this person means well. The reaction deserves care rather than a judgment that you are broken."
      },
      {
        "text": "[Fearful] When sadness pushes through, I get scared I won't come back from it.",
        "suggestion": "If sadness feels as though you might not come back from it, the fear is understandable. That fear deserves room too; you do not have to dismiss it in order to acknowledge the sadness."
      },
      {
        "text": "[Distant] I apologize the second I need comfort, like wanting it is already too much.",
        "suggestion": "Wanting comfort is legitimate and deeply human, even when closeness has taught you to apologize for needing it."
      },
      {
        "text": "[Flat and embarrassed] My daughter sent a song she thought I would like, and I could not make myself listen. I hate that even something kind feels like work.",
        "suggestion": "Even kindness can understandably feel demanding after so much guarding; the effort says how hard closeness has become, not that you do not care."
      },
      {
        "text": "[Flat and guarded] Even in bed, my shoulders stay up like someone might come through the door.",
        "suggestion": "Rest can feel hard to find when part of you learned to keep watch for danger."
      },
      {
        "text": "[Flat, ashamed] I felt relieved when my friend cancelled. Then I was lonely all night. I keep thinking a decent person would just be glad someone wanted to visit.",
        "suggestion": "Wanting company and feeling relieved when the pressure of a visit lifts can coexist. Given how difficult closeness feels, that conflict is understandable; it doesn't make you a bad friend."
      },
      {
        "text": "[Guarded] I asked my ex to return the key. It was sensible. Still, I cried afterwards. I don't want you thinking I secretly want everything back.",
        "suggestion": "Returning the key can be the right decision and still carry a loss. It's understandable that you cried; your tears don't have to mean you want to return to the relationship."
      }
    ],
    "case-carlos": [
      {
        "text": "[Tense and angry] Watching the news about families like mine being treated like threats makes me so angry I can barely sit still.",
        "suggestion": "Seeing families like yours treated as threats can be deeply upsetting. It makes sense that you feel angry about their dignity and safety being treated so carelessly."
      },
      {
        "text": "[Tense] If I do not come in strong, I picture people seeing the scared kid I used to be, and that feels humiliating before anyone has even done anything.",
        "suggestion": "If being seen as scared feels humiliating, it is understandable to dread that exposure. The scared part of you deserves respect too, without having to prove toughness."
      },
      {
        "text": "[Ashamed] At my kid's game I yelled at the ref, and afterward my son would not look at me. I keep telling myself I am turning into exactly what I hated.",
        "suggestion": "Seeing your son pull away can hurt deeply when you want to be a different father. That pain is understandable, and acknowledging it goes alongside taking responsibility for yelling."
      },
      {
        "text": "[Defensive] When someone questions me, I feel small, then I come in louder than I meant to.",
        "suggestion": "Feeling small when someone questions you can be painful. That hurt deserves attention, even while you remain responsible for how loudly or sharply you answer."
      },
      {
        "text": "[Angry and ashamed] When my fists clench, I feel like the fight is already coming, and then I hate myself for looking like every man I promised I would never become.",
        "suggestion": "It is understandable to feel distressed when you see yourself acting in a way you promised you would avoid. We can take that shame seriously without excusing intimidation or condemning your whole self."
      },
      {
        "text": "[Ashamed] I break things and then regret it when I see how scared everyone looks.",
        "suggestion": "Seeing your family afraid can bring painful regret because their safety matters to you. That regret deserves attention, and it does not remove your responsibility for breaking things."
      },
      {
        "text": "[Ashamed] Coworkers steer clear after I blow up, and I feel ashamed even while I act like I do not care.",
        "suggestion": "It can hurt to see coworkers keeping their distance, especially when you feel ashamed of what happened. That shame is understandable; taking responsibility does not require pretending you do not care."
      },
      {
        "text": "[Torn] I leave the room so I do not explode, but then I hear my father's voice calling that weak.",
        "suggestion": "Stepping away can feel difficult when you hear your father's judgment of weakness. That conflict is understandable; feeling it does not undo your choice to keep others safe."
      },
      {
        "text": "[Mistrustful] Calm feels suspicious, like someone is setting me up to be walked over.",
        "suggestion": "If calm feels like a moment when someone could take advantage of you, it is understandable to feel wary. We can respect that fear without deciding that someone is actually setting you up."
      },
      {
        "text": "[Vulnerable] My son fell asleep against me on the couch, and I felt proud, scared, and sad all at once because I want him to feel safe with me in a way I never felt.",
        "suggestion": "This mix of pride, fear, and sadness belongs to the same moment here; his trust touches your love for him and the grief of not having that kind of safety yourself."
      },
      {
        "text": "[Ashamed] I didn't yell this time. I walked out. But I was still furious, and I keep thinking that means I haven't changed at all.",
        "suggestion": "It makes sense to feel discouraged when the anger is still so strong. Feeling it doesn't erase your choice not to yell; the feeling and the way you act on it are different."
      },
      {
        "text": "[Lowering his voice] When my daughter says she's afraid of me, I feel hurt too. I know I'm the one who scared her. Maybe I don't get to feel hurt about it.",
        "suggestion": "The distance between you and your daughter matters to you, so feeling hurt makes sense. You can feel that pain and take responsibility for frightening her; it doesn't excuse the behaviour or take away her right to feel safe."
      }
    ],
    "case-nina": [
      {
        "text": "[Tired] If I sit down before everything is done, guilt starts listing what I should be doing.",
        "suggestion": "With so many demands on you, stopping can understandably bring guilt as well as relief. Needing rest is legitimate even when there are things left to do."
      },
      {
        "text": "[Apologetic] The church asked me to bring food for another event, and I said I could not. I spent the whole night feeling like I had failed at being generous.",
        "suggestion": "When generosity matters to you, saying no can bring guilt. That feeling is understandable; having a limit does not mean you have stopped caring about the people at church."
      },
      {
        "text": "[Sad and guilty] My husband made dinner without asking me, and instead of just feeling cared for I cried and then apologized for making it strange.",
        "suggestion": "Being cared for can be moving when you are so often the one doing the caring. It is understandable that tears came; you did not make the gesture wrong by being touched by it."
      },
      {
        "text": "[Guilty] When anger comes up, I instantly hear myself being selfish and feel guilty.",
        "suggestion": "When you are used to putting others first, your own anger can feel uncomfortable. It is understandable to have needs and limits too; feeling anger does not itself make you selfish."
      },
      {
        "text": "[Apologetic] When I ask for help, I feel like a burden before anyone even answers.",
        "suggestion": "Needing help can feel risky after years of being the one who carries everyone else."
      },
      {
        "text": "[Guilty] A messy counter can make me feel like I have failed as a whole person.",
        "suggestion": "With how much you expect yourself to keep going, an unfinished task can feel painfully disappointing. That feeling deserves room without making a messy counter a verdict on your worth."
      },
      {
        "text": "[Tired] I tell myself other mothers have it harder, so I should be grateful instead of resentful.",
        "suggestion": "Other mothers can have difficulties and you can still be exhausted by your own demands. Your frustration is understandable; gratitude does not have to cancel it out."
      },
      {
        "text": "[Apologetic] I work through being sick, then collapse and feel guilty for collapsing.",
        "suggestion": "Being ill can make it hard to keep doing everything, so needing rest is understandable. Your exhaustion deserves care; it is not another failure you need to apologize for."
      },
      {
        "text": "[Panicked] If someone seems disappointed, I panic like I have ruined the relationship.",
        "suggestion": "When a relationship matters so much, the thought of disappointing someone can feel frightening. That fear is understandable, even though their disappointment does not necessarily mean the relationship is ruined."
      },
      {
        "text": "[Torn] My son talks about joining the army, and I feel proud of him and terrified, then guilty because a good mother should be braver.",
        "suggestion": "This mix of pride and terror belongs to the same moment; loving his courage does not cancel the fear of what his courage may cost him."
      },
      {
        "text": "[Guilty] I wanted to celebrate getting through the school year. Everyone needed something, so I said it didn't matter. It did matter. That sounds so self-centred.",
        "suggestion": "After giving so much through the year, wanting your effort to be noticed is understandable. There is room for your celebration as well as everyone else's needs."
      },
      {
        "text": "[Apologetic] My mother called during the one hour I'd kept for myself. I didn't answer. The relief was lovely, and then I felt cruel.",
        "suggestion": "When so much of your time goes to others, relief at having one uninterrupted hour is understandable. Enjoying that space doesn't mean you don't care about your mother."
      }
    ],
    "case-aisha": [
      {
        "text": "[Panicked] I watched the door most of session to make sure you won't leave. Every time the hallway got quiet, I thought this might be the moment you decide I am too much and walk out.",
        "suggestion": "After so many abrupt endings, it is understandable to fear being left again. That fear deserves care; you do not have to dismiss it just because it shows up here too."
      },
      {
        "text": "[Torn] I ripped up photos after the breakup and felt powerful for maybe one minute, like I could erase him first. Then the floor was covered in pieces and I felt empty and ashamed.",
        "suggestion": "The tearing gave you a moment of control inside unbearable hurt, and the emptiness afterward belongs to the same loss, not a contradiction."
      },
      {
        "text": "[Panicked] Sometimes the panic gets so loud I want to crawl out of my skin. I pace, scratch at my sleeves, and cannot find a place inside myself that feels safe to stay in.",
        "suggestion": "When panic feels that unbearable, wanting relief is understandable. Your distress deserves care; you do not need to dismiss it or prove how intense it is."
      },
      {
        "text": "[Panicked] When you take notes, I think you are writing proof that I am unstable or too dramatic. I know that may not be fair, but my body wants to bolt before you finish the sentence.",
        "suggestion": "Feeling that you might be judged or misrepresented can be frightening. That fear is understandable and deserves to be heard, without assuming we know what the notes say."
      },
      {
        "text": "[Desperate] I send twenty texts because I need them close, then block them before they can leave. Afterward I hate how needy it looks, but in the moment silence feels like being erased.",
        "suggestion": "When silence feels like being erased, wanting contact is understandable. The pain and need deserve care, without making another person responsible for being constantly available."
      },
      {
        "text": "[Fearful and ashamed] I know it was done to me, but I still feel dirty in my own skin. Sometimes I shower and still feel like there is something wrong with me for having been there.",
        "suggestion": "Feeling contaminated after violation can be a painful trauma mark; the shame belongs to what was done to you, not to your worth or your body."
      },
      {
        "text": "[Panicked] When someone says something kind, I sob like I need it and panic like it is a trap. Kindness should feel good, but it makes me feel exposed and hungry at the same time.",
        "suggestion": "Kindness can feel like it reaches both the longing for care and the fear of being trapped by needing it after closeness has been so unsafe."
      },
      {
        "text": "[Furious] If you look away for a second, I feel erased and then furious. I know it is one second, but inside it feels like I vanished from the room and have to fight my way back.",
        "suggestion": "Feeling as though you have disappeared from my attention is painful, even if I looked away briefly. It is understandable that you feel hurt and angry; those feelings have room here."
      },
      {
        "text": "[Ashamed] I hear a voice saying I am trash and impossible to love, and part of me believes it. It gets loudest after I have needed someone, like need itself proves the voice is right.",
        "suggestion": "Needing closeness is human, and it is understandable that it hurts to be attacked for that need. Those cruel words do not establish what you are worth."
      },
      {
        "text": "[Desperate] I stare at the clock to make sure you won't end early. The last five minutes make my chest tight because I am already trying to survive you leaving.",
        "suggestion": "With how frightening endings have been, the last minutes can understandably bring fear. That pain deserves attention, even while the session still has an agreed ending."
      },
      {
        "text": "[Angry, ashamed] My friend needed a quiet evening. I understood it, and I still hated being left out. Then I hated myself for making her tiredness about me.",
        "suggestion": "You can understand her need for rest and still feel the sting of being apart. Given how frightening distance can feel, that reaction is understandable; it doesn't make her responsible for fixing it."
      },
      {
        "text": "[Tearful] Things have been steady for a week, and I'm scared to enjoy it. If I relax and it all disappears, I'll feel stupid for believing it could last.",
        "suggestion": "When closeness has been interrupted so often, enjoying steadiness can also feel risky. Your caution is understandable, even while another part of you wants to take in the good week."
      }
    ],
    "case-david": [
      {
        "text": "[Controlled] When my wife brings up feelings, I feel cornered and want to argue the facts. If I stay with the emotional part, it starts sounding like a trial where I have already lost.",
        "suggestion": "If the conversation feels like a trial you have already lost, feeling cornered is understandable. That discomfort can be heard without deciding that your wife's feelings are an accusation."
      },
      {
        "text": "[Furious] After I scared my wife, I still felt furious at her for pushing me, and then ashamed because I know how that sounds. I hate admitting that part because I know her fear is real.",
        "suggestion": "Feeling pushed in an argument can bring anger, and admitting that alongside shame is understandable. Your anger can be heard without blaming your wife for it or excusing frightening her."
      },
      {
        "text": "[Ashamed] I compare myself to other dads and feel like a fraud. They seem relaxed at school events, and I stand there performing competence while wondering when someone will see through it.",
        "suggestion": "When being a capable father matters to you, comparisons can bring painful self-doubt. That uncertainty is understandable; feeling it does not by itself make you a fraud."
      },
      {
        "text": "[Ashamed] When I apologize, it feels like handing someone proof that I am small. I can know I owe the apology and still feel my face burn like I have given away my last piece of ground.",
        "suggestion": "Apology can feel exposing when it asks for accountability while touching old humiliation about being made small."
      },
      {
        "text": "[Dismissive] I plan perfect vacations so we look good from the outside. If the photos look happy enough, maybe no one sees how tense dinner was or how little I know what to do at home.",
        "suggestion": "It can feel painful to have tension at home that no one sees in the happy photos. Wanting that difficulty to be understood is legitimate; you do not have to make everything look perfect here."
      },
      {
        "text": "[Fearful] The idea of being ordinary scares me, like I would disappear if I stopped impressing people. I do not know who I am without someone needing to admire the result.",
        "suggestion": "If admiration has held your sense of worth together, ordinary can feel like vanishing rather than resting."
      },
      {
        "text": "[Ashamed] I say I am fine while feeling empty, because admitting the emptiness feels humiliating. I can run a meeting and handle pressure, but saying I feel empty makes me feel pathetic.",
        "suggestion": "When you are used to showing that you can handle things, admitting emptiness can feel exposing. That discomfort is understandable; the emptiness deserves attention rather than contempt."
      },
      {
        "text": "[Dismissive] I brag to get respect, then sit alone feeling emptier than before. The room reacts the way I wanted, and somehow that makes it worse when I am by myself.",
        "suggestion": "Getting the admiration you wanted and still feeling empty can be painfully disappointing. That feeling deserves attention; appreciation from others does not mean you must feel satisfied inside."
      },
      {
        "text": "[Wounded but sharp] I still feel like my father is marking me down from somewhere. I can be in my own office, with my own family, and still hear the grade before I know what I did wrong.",
        "suggestion": "Having felt measured by your father for so long, it is understandable that his judgment still hurts. You do not have to dismiss that pain because you now have your own life."
      },
      {
        "text": "[Controlled] When my team outshines me, I feel threatened instead of proud. I know a good leader should celebrate them, but part of me hears their success as my replacement notice.",
        "suggestion": "If their success feels like a threat to your place, it is understandable to feel afraid as well as wish you could be proud. Those feelings do not have to decide how you treat your team."
      },
      {
        "text": "[Controlled, embarrassed] My daughter's criticism stayed with me longer than any business setback. I keep telling myself I should be above needing a child's approval.",
        "suggestion": "It makes sense that her criticism hurts: her view of you matters because the relationship matters. Being hurt isn't something you have to outgrow or treat as beneath you."
      },
      {
        "text": "[Bitter] I envy the colleague who got the role. I can congratulate him and still hate that he has it. Admitting that feels beneath me.",
        "suggestion": "Losing a role you wanted can bring envy as well as disappointment. Those feelings are understandable; acknowledging them doesn't mean letting them decide how you treat your colleague."
      }
    ],
    "case-marcus": [
      {
        "text": "[Flat] Most days I move through routines like I am not fully there. I make coffee, shower, answer people, and it feels like a version of me is doing it while the rest stays back.",
        "suggestion": "After what you have been through, struggling to feel fully present deserves care, not blame. The numbness does not mean you are failing to care about the people around you."
      },
      {
        "text": "[Dazed] I do not know what I feel. It is pressure, anger, and nothing at the same time, and I feel stupid for not having words.",
        "suggestion": "Words can disappear when pressure, anger, and numbness arrive together; not knowing belongs to the overwhelm, not to stupidity."
      },
      {
        "text": "[Quiet and guarded] I sit in the car before going inside because I can't face the quiet. The engine is off, but at least the car still feels like a place between the day and the apartment.",
        "suggestion": "If the quiet at home feels too much to face, it is understandable to hesitate before going in. That difficulty deserves attention rather than criticism for sitting in the car."
      },
      {
        "text": "[Tense] Loud bangs make me jump and then I get angry at myself for reacting. Yesterday a truck gate slammed outside and I was already scanning the room before I knew what happened.",
        "suggestion": "After so much danger, being startled by a loud bang is understandable. The reaction can be exhausting to live with, and you do not deserve to be attacked for having it."
      },
      {
        "text": "[Low voice] Holidays feel hollow; I don't feel anything I'm supposed to feel. People talk about family and gratitude, and I mostly feel like I am watching through a window.",
        "suggestion": "When everyone expects warmth and gratitude, feeling distant can make holidays lonely. That difficulty is understandable; you do not have to produce the feelings others expect."
      },
      {
        "text": "[Quiet and guarded] I avoid reminders of my service because they open the floodgates. A news clip or a sound in the street can put me back there faster than I can explain.",
        "suggestion": "When reminders bring you back there so quickly, being afraid of them is understandable. That distress deserves respect, without needing you to explain every detail for it to be real."
      },
      {
        "text": "[Flat] I keep the apartment dark because bright rooms feel like they ask too much of me. With the shades down, I do not have to see the dishes, the empty chair, or myself as clearly.",
        "suggestion": "If seeing everything in the apartment feels like too much at once, wanting less pressure is understandable. That difficulty can be acknowledged without judging you for keeping the shades down."
      },
      {
        "text": "[Low voice] I cannot remember the last time I laughed and trusted it would last. Even when something is funny, I catch myself waiting for the feeling to disappear.",
        "suggestion": "When good moments have felt uncertain, it is understandable to hesitate to trust one. You can have both the enjoyment and the fear of losing it; neither makes the other false."
      },
      {
        "text": "[Quiet and guarded] I do not want to need anyone, because needing people has usually meant losing control. If someone matters, they can ask questions, leave, or get inside places I would rather keep closed.",
        "suggestion": "When needing people has felt like losing control, closeness can understandably feel risky. Your need for privacy and choice deserves respect, without requiring you to deny every need for support."
      },
      {
        "text": "[Flat] Sometimes I think I am better off alone forever, because closeness only gives people more ways to hurt me. Alone is not good, exactly, but at least nobody can reach what is left.",
        "suggestion": "After being hurt in close relationships, it is understandable to fear letting someone near again. That fear deserves to be taken seriously, even while being alone does not feel good either."
      },
      {
        "text": "[Quiet, ashamed] A neighbour helped carry the shopping. I was grateful. Then I felt weak. I used to be the one people counted on.",
        "suggestion": "Having been the person others relied on, receiving help can feel unfamiliar and exposing. Being grateful for it doesn't make you weak."
      },
      {
        "text": "[Flat] I laughed at something on the radio. Felt wrong afterwards. There are people who never got to come home. Why should I get a good morning?",
        "suggestion": "With the losses you carry, it's understandable that a moment of enjoyment can bring guilt too. That good moment doesn't mean you've forgotten them or that their lives mattered less."
      }
    ]
  },
  "exploratory-questions": {
    "case-sara": [
      {
        "text": "[Softly] You should have seen the way she looked at me; I felt so small.",
        "suggestion": "What is it like inside when you feel that small?"
      },
      {
        "text": "[Embarrassed] At brunch I kept saying I was fine, but I could tell I was trying too hard.",
        "suggestion": "When you notice yourself trying that hard to seem fine, what feeling is closest?"
      },
      {
        "text": "[Angry] I was angry he forgot my birthday, and then I felt silly for caring.",
        "suggestion": "When you call yourself silly for caring, what feeling is underneath that?"
      },
      {
        "text": "[Softly] I want to ask him why he stopped trying, but I keep telling myself it is pointless.",
        "suggestion": "When you imagine asking him that, what feeling comes up first?"
      },
      {
        "text": "[Panicked] Sometimes I delete old photos and then look for them again ten minutes later.",
        "suggestion": "When you cannot let the photos stay gone, what feeling comes up most strongly?"
      },
      {
        "text": "[Embarrassed] When someone is kind to me, I suddenly do not know what to do with it.",
        "suggestion": "When kindness leaves you unsure what to do, what feeling comes up?"
      },
      {
        "text": "[Softly] I wake up and forget for a second that he is gone, and then it hits me all over again.",
        "suggestion": "In that first moment of remembering, what feeling arrives before you explain it?"
      },
      {
        "text": "[Tearful] I feel embarrassed that I am still this sad, like grief should have expired by now.",
        "suggestion": "When the embarrassment says grief should be over, what sadness is still asking to be noticed?"
      },
      {
        "text": "[Tearful] Seeing couples at the market makes me leave before I cry.",
        "suggestion": "When you leave before the tears come, what feeling are you trying not to show?"
      },
      {
        "text": "[Softly] I cross the street to avoid the cafe we used to call ours.",
        "suggestion": "When you picture that cafe, what feeling rises before you decide to cross the street?"
      },
      {
        "text": "[Unsure] I found a restaurant I wanted to try. I nearly booked a table, then closed the page. I can't quite tell what stopped me.",
        "suggestion": "What happens inside as you imagine going there on your own?"
      },
      {
        "text": "[Quietly] My friend said I seemed more like myself. I smiled, but something about that stayed with me. I'm not sure what.",
        "suggestion": "What does hearing 'more like yourself' bring up in you?"
      }
    ],
    "case-michael": [
      {
        "text": "[Tense and angry] When someone corrects one detail, I get angry and embarrassed at the same time.",
        "suggestion": "What do you notice inside as anger and embarrassment show up together?"
      },
      {
        "text": "[Defensive] A sigh from my wife makes me assume she has already decided I am wrong.",
        "suggestion": "When that sigh lands as judgment, what feeling comes first?"
      },
      {
        "text": "[Tense] My boss praised the team but not me, and I could not stop thinking about it.",
        "suggestion": "When you replay not being named, what feeling keeps coming back?"
      },
      {
        "text": "[Tense and angry] I scan meeting rooms for disrespect before I even know who has walked in.",
        "suggestion": "When you are already scanning for disrespect, what feeling are you bracing for?"
      },
      {
        "text": "[Defensive] When I apologize to my wife, it feels like I have handed her the win.",
        "suggestion": "When apologizing feels like losing, what feeling is hardest to stay with?"
      },
      {
        "text": "[Tense] When I am unsure of an answer in front of the team, I start talking faster so nobody notices.",
        "suggestion": "What does being unsure in front of the team feel like inside?"
      },
      {
        "text": "[Tense and angry] I told my wife I was fine, but I was still angry hours later.",
        "suggestion": "When the anger stays for hours, where do you notice it most?"
      },
      {
        "text": "[Defensive] I slam doors at home so no one hears me say I was hurt.",
        "suggestion": "Before the door slams, what feeling is there that is hard to say out loud?"
      },
      {
        "text": "[Tense] Being told to calm down makes me explode before I hear anything else.",
        "suggestion": "When those words hit, what feeling comes before the explosion?"
      },
      {
        "text": "[Ashamed] I hate feeling weak in front of people, like everyone can see I failed.",
        "suggestion": "When 'weak' shows up in front of people, what feeling comes with being seen?"
      },
      {
        "text": "[Tense] The report was accepted without any changes. I should have been pleased. Instead I spent the evening checking whether I'd missed something.",
        "suggestion": "What do you notice in yourself when there is nothing left to correct?"
      },
      {
        "text": "[Hesitant] My son wanted me to sit with him, not help him fix anything. I stayed, but I didn't really know what to do.",
        "suggestion": "What is it like for you to be wanted there without a job to do?"
      }
    ],
    "case-jason": [
      {
        "text": "[Quietly] When it is my turn to speak, I lose the sentence and everyone seems to be waiting.",
        "suggestion": "When everyone seems to be waiting, what feeling shows up?"
      },
      {
        "text": "[Voice shaking] My voice shakes when I say my name, and then I hear myself sounding pathetic.",
        "suggestion": "When you hear the shake in your voice, what feeling comes up first?"
      },
      {
        "text": "[Anxious] A friend did not reply, and I kept wondering what I did wrong.",
        "suggestion": "When you wonder what you did wrong, what feeling comes with that question?"
      },
      {
        "text": "[Quietly] If someone laughs across the room, I assume it is about me.",
        "suggestion": "What happens inside when you think the laugh is about you?"
      },
      {
        "text": "[Hesitant] I keep my eyes on the table so people will not ask me anything.",
        "suggestion": "When looking up feels risky, what feeling comes up around being seen?"
      },
      {
        "text": "[Anxious] After meetings I replay one sentence for hours and feel my face heat up.",
        "suggestion": "As that sentence comes back to you now, what do you notice inside?"
      },
      {
        "text": "[Quietly] At parties I track the exit before I even know who is in the room.",
        "suggestion": "When your attention goes to the exit, what feeling are you trying to get away from?"
      },
      {
        "text": "[Hesitant] Someone smiled at me in the hallway, and I could not tell if it was friendly or awkward.",
        "suggestion": "When you cannot tell what the smile means, what do you notice inside?"
      },
      {
        "text": "[Anxious] I say I am busy before small talk can show how awkward I am.",
        "suggestion": "When small talk feels about to expose you, what feeling comes forward first?"
      },
      {
        "text": "[Quietly] Sunday nights feel heavy, like everyone else has a life waiting for them.",
        "suggestion": "When that Sunday heaviness arrives, what feeling comes with the thought of belonging?"
      },
      {
        "text": "[Uncertain] A colleague saved me a seat. I felt something, but then I was too busy trying to sit down normally to notice it.",
        "suggestion": "What do you notice now as you picture the seat they saved for you?"
      },
      {
        "text": "[Low voice] I typed a message to a friend, then deleted it. It only said I was having a rough day. Somehow that was too much.",
        "suggestion": "What feels most difficult about letting your friend see that message?"
      }
    ],
    "case-laura": [
      {
        "text": "[Slow and flat] Most days feel muted, and I cannot tell if I am sad or just numb.",
        "suggestion": "What is that muted feeling like in you right now?"
      },
      {
        "text": "[Fearful] The neighbors argued in the hallway, and I spent the rest of the night acting like it was nothing.",
        "suggestion": "Just beneath the acting-like-nothing, what feeling is closest?"
      },
      {
        "text": "[Tense and guarded] When someone is kind to me, I get suspicious and then feel bad for being suspicious.",
        "suggestion": "As kindness arrives and suspicion follows, what do you notice first in yourself?"
      },
      {
        "text": "[Flat and guarded] Even gentle touch on my shoulder startles me before I can think who it is.",
        "suggestion": "At the first startle, what do you feel before thought comes in?"
      },
      {
        "text": "[Distant] At night I pour wine before I have decided whether I actually want it.",
        "suggestion": "In the second before the wine, what are you moving away from?"
      },
      {
        "text": "[Tense and guarded] I wake up already planning how to get through the day without needing anyone.",
        "suggestion": "What do you feel as you imagine needing someone today?"
      },
      {
        "text": "[Slow and flat] Good news lands flat, and I do not know why I cannot enjoy it.",
        "suggestion": "When good news lands flat, what is the flatness like from the inside?"
      },
      {
        "text": "[Distant] Sometimes a song from when I was married comes on, and sadness shows up before I can turn it off.",
        "suggestion": "Before you turn the sadness off, what is it asking for?"
      },
      {
        "text": "[Tense and guarded] I apologize for needing comfort, as if asking for it will get me in trouble.",
        "suggestion": "When asking for comfort feels dangerous, what do you notice in yourself?"
      },
      {
        "text": "[Flat and guarded] I skip anything with fighting and tell people I just do not like those movies.",
        "suggestion": "Imagining the real reason spoken aloud, what feeling comes first?"
      },
      {
        "text": "[Guarded] My friend sat beside me without asking questions. I didn't mind it as much as I expected. That's the bit I can't explain.",
        "suggestion": "What was that quiet company like for you?"
      },
      {
        "text": "[Flat] I sorted the last of his things. It was just a practical job. But afterwards I couldn't settle, even though everything was finally tidy.",
        "suggestion": "What do you notice in that unsettled feeling right now?"
      }
    ],
    "case-carlos": [
      {
        "text": "[Defensive] When my foreman questions me in front of the crew, I laugh it off but cannot drop it.",
        "suggestion": "What do you notice inside as you recall your foreman questioning you?"
      },
      {
        "text": "[Tense] After an argument, I keep thinking of what I should have said, even when I know it will make things worse.",
        "suggestion": "While those replies keep coming, what are they trying to answer inside you?"
      },
      {
        "text": "[Fearful] If I back down, it feels like people will stop respecting me.",
        "suggestion": "When respect feels at risk, what do you feel in the sharpest place?"
      },
      {
        "text": "[Ashamed] I keep seeing my boy flinch when I raised my voice, and I do not want to look straight at it.",
        "suggestion": "Holding the image of his flinch for one second, what feeling comes up?"
      },
      {
        "text": "[Mistrustful] When the house gets quiet after a fight, I get more tense than when we were yelling.",
        "suggestion": "In the quiet after the fight, what starts happening inside?"
      },
      {
        "text": "[Tense] I say I do not care what people think, but one look can ruin my whole day.",
        "suggestion": "When that one look ruins the day, where does it hit?"
      },
      {
        "text": "[Defensive] My father used to say feelings make men useless, and I still hear that when my wife asks me to talk.",
        "suggestion": "Hearing that old rule now, what do you feel toward yourself?"
      },
      {
        "text": "[Angry, clenching fists] When another man talks down to me, I cannot tell if I am angry or embarrassed.",
        "suggestion": "As he talks down to you, what arrives first: anger, embarrassment, or something else?"
      },
      {
        "text": "[Tense and angry] After an argument, I tell myself I am over it, but I stay keyed up for hours.",
        "suggestion": "After the argument is over outside, what is still running inside?"
      },
      {
        "text": "[Vulnerable] What I want most is for my family to feel safe with me.",
        "suggestion": "When you say safe, what happens in you around that wish?"
      },
      {
        "text": "[Tense] My daughter asked me to lower my voice. I did. But something happened inside before I did, and I don't know what to call it.",
        "suggestion": "What do you notice as you return to the moment she asked you?"
      },
      {
        "text": "[Quiet, frowning] The men asked for my advice instead of just doing what I said. I liked it, actually. Then I felt uncomfortable about liking it.",
        "suggestion": "What felt good about being asked for your advice?"
      }
    ],
    "case-nina": [
      {
        "text": "[Tired] When I ask for help, guilt rushes in and I want to take it back.",
        "suggestion": "As guilt rushes in, what does it tell you about yourself?"
      },
      {
        "text": "[Guilty] I complain that no one helps, but I also redo things when they try.",
        "suggestion": "When help comes in a way you cannot direct, what happens inside?"
      },
      {
        "text": "[Torn] When I say no, I explain so much that I almost take it back.",
        "suggestion": "As the no starts disappearing, what do you feel in that moment?"
      },
      {
        "text": "[Guilty] When I rest, a voice calls me lazy before I have even caught my breath.",
        "suggestion": "When the word lazy hits, where do you feel it most?"
      },
      {
        "text": "[Apologetic] I apologize before asking for help, like my need is already too much.",
        "suggestion": "When the need feels too big, what happens in how you meet yourself?"
      },
      {
        "text": "[Torn] By afternoon I realize I agreed to three things I never wanted to do.",
        "suggestion": "Saying you did not want them, what do you notice inside?"
      },
      {
        "text": "[Tired] I compare myself to other moms and decide I have failed some test everyone else understands.",
        "suggestion": "At the moment you decide you failed the test, what feeling comes up?"
      },
      {
        "text": "[Guilty] I dream of being taken care of and then feel selfish for wanting it.",
        "suggestion": "Before the selfish voice arrives, what is it like to let someone care for you?"
      },
      {
        "text": "[Torn] I say it is easier if I do it myself, then spend the evening angry that nobody helped.",
        "suggestion": "Under the anger after doing it yourself, what feeling is there?"
      },
      {
        "text": "[Tired] I crash on the sofa at night after holding everyone together all day.",
        "suggestion": "When you stop holding everyone together, what do you meet in yourself?"
      },
      {
        "text": "[Hesitant] A colleague offered to take one of my tasks. I almost said yes. Then I heard myself saying it was no trouble, and I felt cross afterwards.",
        "suggestion": "What did you want to say in that moment before 'no trouble' came out?"
      },
      {
        "text": "[Apologetic] Everyone had a lovely Sunday. I organised it. When they asked whether I'd enjoyed it, I couldn't answer without wanting to cry.",
        "suggestion": "What comes up as you give yourself room to answer that now?"
      }
    ],
    "case-aisha": [
      {
        "text": "[Panicked] If a reply does not come after I open up, I start thinking I was stupid to trust them.",
        "suggestion": "What feeling comes up as trusting starts to feel stupid?"
      },
      {
        "text": "[Desperate] I go from please do not leave to leave me alone in seconds.",
        "suggestion": "Just before it flips, what feeling is too painful to remain near?"
      },
      {
        "text": "[Desperate] I do not know what I feel today; everything is too much and also kind of blank.",
        "suggestion": "When it is both too much and blank, what feeling is easiest to notice first?"
      },
      {
        "text": "[Desperate] When you look down to write notes, I start wondering what you are really thinking about me.",
        "suggestion": "What happens inside as you imagine what I might be thinking?"
      },
      {
        "text": "[Panicked] When I talk about scratching, I want to make it sound casual so you will not overreact.",
        "suggestion": "What feeling comes up as you try to make it sound casual?"
      },
      {
        "text": "[Desperate] If you cancel a session, I do not want to come back and be dropped twice.",
        "suggestion": "What do you feel as you imagine me cancelling a session?"
      },
      {
        "text": "[Tearful] Kindness makes me cry, and then I want to get away from it.",
        "suggestion": "What is the first feeling that comes up when kindness reaches you?"
      },
      {
        "text": "[Desperate] I test people after they get close to see whether they care enough to stay.",
        "suggestion": "As you picture a test, what fear are you trying to answer inside?"
      },
      {
        "text": "[Ashamed] After I lash out, I hate myself so much I can barely stand being in my own skin.",
        "suggestion": "When that self-hate hits, what feeling is hardest to stay near?"
      },
      {
        "text": "[Panicked] At the end I say goodbye like it is fine, and then I leave angry for needing you.",
        "suggestion": "What feeling is under the anger as you leave?"
      },
      {
        "text": "[Guarded, then softer] I don't want to need your opinion. But when you said you hadn't decided for me, I felt worse, not better. I don't understand that.",
        "suggestion": "What was hardest to hear in my saying I hadn't decided for you?"
      },
      {
        "text": "[Quickly, then pausing] I wanted to send another message, and I didn't. Everyone calls that progress. I'm still trying to work out what I was left feeling.",
        "suggestion": "What do you notice in the feeling that stayed after you put the phone down?"
      }
    ],
    "case-david": [
      {
        "text": "[Controlled] When she calls me cold, I want to dismiss her, but it stays with me later.",
        "suggestion": "What feeling is there when it stays with you later?"
      },
      {
        "text": "[Controlled] If I am not winning, I feel hollow, like there is nothing solid under me.",
        "suggestion": "When winning is not there, what feeling comes with that hollowness?"
      },
      {
        "text": "[Defensive] I start listing achievements when I feel judged by my wife.",
        "suggestion": "What feeling are you trying not to show when you list achievements?"
      },
      {
        "text": "[Controlled] Praise from my boss feels good for a second, and then I start wondering what he wants.",
        "suggestion": "As praise turns into suspicion, what feeling starts to move inside?"
      },
      {
        "text": "[Dismissive] Admitting I am wrong makes my face burn like everyone can see through me.",
        "suggestion": "When admitting you are wrong feels exposing, what feeling comes up?"
      },
      {
        "text": "[Avoidant] When the talk gets emotional, I check my phone so I do not have to look exposed.",
        "suggestion": "As you reach for the phone, what feeling are you moving away from?"
      },
      {
        "text": "[Controlled] When the kids push back at dinner, I hear myself sounding like my father.",
        "suggestion": "What feeling comes up as you hear that resemblance?"
      },
      {
        "text": "[Distant] Since the affair, I cannot tell whether I feel guilty or just irritated that everyone keeps bringing it up.",
        "suggestion": "When guilt and irritation sit that close, what do you notice inside?"
      },
      {
        "text": "[Embarrassed] I want someone to notice what I do without making me beg for credit.",
        "suggestion": "When the credit does not come, what feeling comes up?"
      },
      {
        "text": "[Wounded but sharp] I hate being ordinary at work in front of everyone, like it means I have disappeared.",
        "suggestion": "When 'ordinary' starts to feel like disappearing, what feeling shows up?"
      },
      {
        "text": "[Controlled] I didn't correct my colleague in front of the team. It was the sensible decision. I was preoccupied with it for hours afterwards, though.",
        "suggestion": "What did holding back that correction feel like for you?"
      },
      {
        "text": "[Quiet, guarded] My wife thanked me for listening. There was nothing particularly insightful about what I said. Her thanking me felt strangely difficult to take.",
        "suggestion": "What is difficult about receiving her thanks just for listening?"
      }
    ],
    "case-marcus": [
      {
        "text": "[Slow and flat] Most days I am numb and then a wave hits out of nowhere.",
        "suggestion": "As you describe that wave, what do you notice in yourself now?"
      },
      {
        "text": "[Hypervigilant] After nightmares, I do not know what is real enough to talk about and what I should leave alone.",
        "suggestion": "As you decide what to leave alone, what happens inside?"
      },
      {
        "text": "[Quiet and guarded] In the grocery store I stay near exits because the aisles feel too closed in.",
        "suggestion": "When the aisles feel closed in, what feeling comes up?"
      },
      {
        "text": "[Low voice] After dark I cannot tell if the silence is peaceful or if it is closing in.",
        "suggestion": "What happens inside as the silence shifts from peaceful to closing in?"
      },
      {
        "text": "[Low voice] I sit in the car after work because going upstairs means being alone with whatever is there.",
        "suggestion": "What feeling is waiting when you picture opening the apartment door?"
      },
      {
        "text": "[Quiet and guarded] I keep the lights low and ignore calls so the world stays far away.",
        "suggestion": "What happens inside as you imagine answering one of those calls?"
      },
      {
        "text": "[Flat] When something good happens, I wait for the part where it gets taken back.",
        "suggestion": "What feeling comes up while you wait for it to be taken back?"
      },
      {
        "text": "[Hypervigilant] Sudden sounds in the stairwell make me jump and then scan for danger.",
        "suggestion": "Right after the jump, what feeling takes over?"
      },
      {
        "text": "[Quiet and guarded] I do not remember the last time I really laughed without checking myself.",
        "suggestion": "As you say you cannot remember laughing, what feeling comes closest to the surface?"
      },
      {
        "text": "[Flat] I tell myself I am better off alone because closeness always costs something.",
        "suggestion": "When closeness starts to feel costly, what feeling shows up inside?"
      },
      {
        "text": "[Low voice] I stayed when the neighbour started talking. Usually I leave. Afterwards I was restless. That's all I know.",
        "suggestion": "What can you notice about that restlessness here, without needing to explain it?"
      },
      {
        "text": "[Guarded] You remembered the date. I wasn't expecting that. Don't know whether I like it.",
        "suggestion": "What is it like, right now, that I remembered?"
      }
    ]
  },
  "providing-treatment-rationale": {
    "case-sara": [
      {
        "text": "[Softly] Shouldn't I just focus on positive thoughts instead of digging into how sad I am?",
        "suggestion": "You want some relief from the sadness. Positive thoughts may help, and we can also listen to what you are grieving and needing. We can take it slowly, without spending the whole session in the pain."
      },
      {
        "text": "[Embarrassed] Why keep asking what I feel when I just need a plan for getting through the week?",
        "suggestion": "We can make a plan for the week. Listening to what is hardest can help us choose what belongs in it: perhaps company, rest, or help with a difficult evening. The feelings help us make the plan fit you."
      },
      {
        "text": "[Tearful] I feel embarrassed crying about this again. How does making room for tears help me move on?",
        "suggestion": "The tears may help us notice what still hurts and what you need as you adjust to the loss. Crying is not a task you have to complete. We can make room for the sadness and pause when you need to."
      },
      {
        "text": "[Embarrassed] If distraction gets me through the quiet hours, why would we mess with that?",
        "suggestion": "Distraction helps you get through those hours, and we can keep what works. We can also explore a little of what makes the quiet hard, so we understand what support you need when distraction is not enough."
      },
      {
        "text": "[Worried] How does talking about a breakup help when other people have bigger problems?",
        "suggestion": "This breakup is affecting your life, even if others have different problems. Exploring what hurts can help us understand what you need to get through it. You do not have to prove the pain is big enough to deserve attention."
      },
      {
        "text": "[Tearful] If we talk about him more, won't that keep him in my head even longer?",
        "suggestion": "You are worried that talking will keep you stuck on him. The aim is to understand what comes up for you when you miss him, rather than go over every detail about him. That can help us find what you need now."
      },
      {
        "text": "[Hesitant] Can we set goals so I am busy enough not to feel this?",
        "suggestion": "We can set goals that give the day some structure. I also want to understand what happens when the sadness returns. That can help us choose activities and support that matter to you, rather than rely on staying busy every moment."
      },
      {
        "text": "[Worried] What if 'hollow' is all I have? I don't know how to make that useful.",
        "suggestion": "We can begin with \"hollow\"; you do not need a better word. Exploring when that emptiness comes and what it is like may help us understand what you are missing. We do not have to turn it into a different feeling."
      },
      {
        "text": "[Impatient] I want a timeline for when I stop checking his profile; otherwise this feels pointless.",
        "suggestion": "You want to know when this will change. I cannot give you a date, but we can look at what you hope to find when you check and how you feel afterwards. Understanding that pattern may help us find other ways to meet the need."
      },
      {
        "text": "[Worried] How is this different from retelling the breakup until even I am sick of hearing it?",
        "suggestion": "You do not want to keep repeating the same story. We can pause at a moment that still hurts and explore what it means to you now. The aim is to understand what you need, not to go through every detail of the breakup again."
      },
      {
        "text": "[Unsure] Some weeks I cry more in here, and some weeks I don't. How will we know this is helping, apart from how emotional I get?",
        "suggestion": "You want a way to recognise change beyond tears. In this work we look at whether you can understand what you feel and need, and respond to yourself with less blame. We can agree on signs that matter to you and review them together; being more emotional isn't the goal."
      },
      {
        "text": "[Curious] If I know the breakup is why I'm upset, what else are we trying to find out by staying with the feeling?",
        "suggestion": "Knowing the cause matters. Staying with the feeling can help distinguish the sadness of losing him from the blame you turn on yourself, so we can respond to each more helpfully. We can try this with one small moment, if you want."
      }
    ],
    "case-michael": [
      {
        "text": "[Skeptical] I came for anger control, not feelings talk. How does this stop me from blowing up?",
        "suggestion": "You want to stop the outbursts. We can slow down what happens just before your voice rises and notice the feelings involved. Recognizing that moment may give you more room to choose how you respond."
      },
      {
        "text": "[Defensive] Isn't looking for the trigger just making excuses for me blowing up?",
        "suggestion": "Understanding what sets off the anger does not remove your responsibility for what you do. It can help us notice the reaction sooner and work on a different response. The aim is to change the behavior, not explain it away."
      },
      {
        "text": "[Tense] Why slow down when people are watching and I need to look in control?",
        "suggestion": "You want to look in control when people are watching. A short pause can give you time to notice what has hit you before you answer. We can practice a pause that helps you respond firmly without raising your voice."
      },
      {
        "text": "[Worried] How does going near shame help if my wife or team see that as weakness?",
        "suggestion": "You worry that showing shame will cost you respect. Exploring it here can help you understand what happens when you feel exposed. You do not have to reveal it to your wife or team in order to work on how you respond."
      },
      {
        "text": "[Challenging] Can we skip the feelings and just build a tool for when my chest gets hot?",
        "suggestion": "We can work on something you can use when your chest gets hot. Understanding what you feel at that moment helps us choose a useful response: perhaps pausing, setting a limit, or saying what bothered you. We do not have to start with a long explanation."
      },
      {
        "text": "[Worried] How does noticing a tight jaw help me lead when a meeting turns tense?",
        "suggestion": "You want to handle a tense meeting well. Your jaw tightening can be a cue to pause and notice what is happening before you answer. The point is to understand your reaction early enough to choose a response that fits the situation."
      },
      {
        "text": "[Worried] What if I blow up after all this and everyone says therapy failed?",
        "suggestion": "Another outburst would matter, and we would need to take its effect seriously. It would also give us something specific to review: what happened before it, what you noticed, and where a different response was possible. That helps us decide what to work on next."
      },
      {
        "text": "[Worried] How does more talking prove to my wife that I can stop exploding?",
        "suggestion": "Your wife will need to see changes in what you do. Exploring the anger can help us understand how it builds and practice a different response. We can then look honestly at whether there are fewer outbursts and whether you take responsibility when one happens."
      },
      {
        "text": "[Challenging] Will this change how my team sees me, or just make me analyze myself?",
        "suggestion": "You want the work to make a difference in how you lead. Understanding what happens when you feel challenged can help us practice a different tone or response. We can judge its usefulness by what changes with the team, not by how much you can analyze."
      },
      {
        "text": "[Embarrassed] What am I supposed to do if I am not good at feelings and have no words?",
        "suggestion": "You do not need to be good at describing feelings to start. We can use something you already notice, like heat or a tight jaw, and explore what happens around it. Those clues can help us understand the reaction before you have a name for it."
      },
      {
        "text": "[Sceptical] I need to stop snapping. How does telling you I felt embarrassed in a meeting help me do that at home?",
        "suggestion": "You want a change you can use at home. Noticing the embarrassment before it becomes anger may help you catch the reaction earlier and choose how to respond, rather than only fighting the anger afterwards. We can begin with a manageable moment you choose."
      },
      {
        "text": "[Practical] Couldn't we agree on a rule for arguments? If I have a rule, I can follow it. Feelings don't seem very reliable.",
        "suggestion": "A rule can be useful. We're also looking at what happens when criticism hits, because understanding that reaction can make it easier to use the rule when you most need it. We can keep it practical and check what is useful to you."
      }
    ],
    "case-jason": [
      {
        "text": "[Skeptical] Does this actually help social anxiety, or am I just learning to stare at fear?",
        "suggestion": "You want to know how this helps outside the room. We can explore what feels threatening when people look at you, and practice staying with a manageable amount of that feeling. The aim is to make speaking less of a battle with yourself."
      },
      {
        "text": "[Blank] What if I go blank here too and waste the whole session?",
        "suggestion": "Going blank would be something for us to understand, not a failure of the session. We can slow down and notice what happens when the words go. That may help us find a way to support you without adding pressure to speak."
      },
      {
        "text": "[Anxious] My thoughts are what ruin things, so why keep asking about my chest?",
        "suggestion": "The thoughts matter. I ask about your chest because physical sensations can give us another clue to what you are experiencing. We can explore both, and see which helps you recognize the anxiety and what you need in that moment."
      },
      {
        "text": "[Worried] When I pay attention to fear it gets louder, so why would I practice that?",
        "suggestion": "You notice that focusing on fear makes it stronger. We need to take that seriously and adjust the pace. The aim is to understand a manageable part of your experience, with room to pause, rather than make you endure more fear."
      },
      {
        "text": "[Hesitant] Can we just script what I should say before meetings so I do not freeze?",
        "suggestion": "We can prepare a sentence for meetings. I also want to understand what happens when you freeze, because having words ready may not be enough then. We can practice the sentence alongside noticing what helps you stay present."
      },
      {
        "text": "[Anxious] How long before I can speak in meetings without my body taking over?",
        "suggestion": "I cannot promise a timetable. We can work on recognizing what happens when attention turns to you, and look together for changes such as staying present a little longer or recovering more easily afterwards. Those changes matter even before the anxiety is gone."
      },
      {
        "text": "[Embarrassed] I'm embarrassed to talk about being this scared; how is saying it out loud supposed to help?",
        "suggestion": "Saying it aloud can help us understand the fear together instead of leaving you to handle it alone. You can share a little and see how it feels to be heard. We do not have to force it if the embarrassment becomes too much."
      },
      {
        "text": "[Worried] What do I actually do when the 'you're awkward' voice starts?",
        "suggestion": "We can notice what that voice says and how it affects you, then practice a response that feels believable. The aim is to give you something to turn to when the criticism starts, without having to win an argument with it."
      },
      {
        "text": "[Hesitant] Will I always have to work this hard just to speak like everyone else?",
        "suggestion": "You want speaking to take less effort. I cannot promise how quickly that will happen. We can work with the fear and self-criticism, and look for changes such as saying a little more or recovering more easily after a difficult conversation."
      },
      {
        "text": "[Quietly] Why practice eye contact when it feels like people can see everything wrong with me?",
        "suggestion": "Eye contact is not a requirement. If being seen is something you want to work on, we can explore what makes it feel exposing and choose a small step together. The aim is more freedom to connect, not a particular way of looking at people."
      },
      {
        "text": "[Worried] When you ask me to notice a feeling, I start checking whether I'm doing it correctly. Isn't that more of the same problem?",
        "suggestion": "That checking is important information, not a failed exercise. We can notice the pressure itself, without requiring a particular feeling, and practise a less judging way of paying attention."
      },
      {
        "text": "[Hesitant] I can talk about a meeting afterwards. But when I'm actually there, my mind goes blank. What are we practising here that could help there?",
        "suggestion": "You want this to reach those difficult moments. Here we can slowly notice what happens just before the blankness, so you have more chance of recognising it without immediately judging yourself. You can choose where we start."
      }
    ],
    "case-laura": [
      {
        "text": "[Worried] If this is my brain chemistry, why would talking to you change anything?",
        "suggestion": "You are wondering whether talking can help if there is a biological part to this. We do not have to choose just one explanation. Here we can explore your experience and what helps you feel more present and connected, alongside any medical care."
      },
      {
        "text": "[Slow and flat] How do I know this will not make me relive trauma when I already disappear?",
        "suggestion": "You already know how easily you can feel far away. We can begin with what you notice now, without asking you to relive the trauma. Small steps and pauses help us find a pace you can stay with, and we can adjust if it becomes too much."
      },
      {
        "text": "[Slow and flat] If I go numb before I can feel anything, what exactly are we working with?",
        "suggestion": "The numbness is something we can explore without deciding why it is there. We can notice when it changes, what comes just before it, and what helps you stay present. That gives us a place to begin without forcing a feeling."
      },
      {
        "text": "[Worried] What if your kindness makes me more suspicious instead of safer?",
        "suggestion": "Then the suspicion belongs in our conversation too. Understanding what feels hard to trust can help us decide how to work together. You do not have to feel safer just because I am kind, or trust more quickly than you do."
      },
      {
        "text": "[Hesitant] Will this dig up things I cannot handle and leave me worse afterward?",
        "suggestion": "You are worried about how you will feel afterwards. We can agree on what to leave aside, begin with a small amount, and check how you are before the session ends. How you feel afterwards also matters; it helps us adjust the work rather than push ahead."
      },
      {
        "text": "[Slow and flat] Why chase tiny signals if I shut down before I can use them?",
        "suggestion": "You worry that you will shut down before any of this helps. Small signs can help us notice when the work is becoming too much, so we can slow down or pause sooner. We are trying to work at a pace you can stay with."
      },
      {
        "text": "[Slow and flat] How is talking supposed to change this flatness when I barely feel anything?",
        "suggestion": "We can begin with the flatness itself: what it is like, when it changes, and how it affects your days. The aim is to understand your experience and find what helps you feel more connected. You do not have to produce a strong feeling for the work to count."
      },
      {
        "text": "[Slow and flat] How will I know this is working if I still feel numb most days?",
        "suggestion": "We can look for changes that matter to you, even if numbness is still there: a moment of interest, less strain with someone close, or being able to stay present a little longer. Checking those changes together helps us decide whether the work is useful."
      },
      {
        "text": "[Hesitant] Can we just talk about practical things so I do not have to feel all this?",
        "suggestion": "We can talk about practical things. I would also like to understand what makes the feelings hard to approach, so any plan takes that into account. We can begin with everyday life without asking you to go into painful memories."
      },
      {
        "text": "[Worried] What if I freeze in here and you sit there waiting for an answer?",
        "suggestion": "If you freeze, I do not want to add pressure by waiting for an answer. We can pause and find what helps you notice the room or my voice. Understanding those moments is part of finding a way to work together that you can stay present for."
      },
      {
        "text": "[Flat] I spend my working day helping people cope. I don't understand why talking about what hurts is better than learning to cope with it.",
        "suggestion": "Coping matters, and we won't take it away. We can also approach a little of what the numbness keeps at a distance, so coping doesn't have to mean being cut off from everything you feel. You can choose how much we approach."
      },
      {
        "text": "[Guarded] You say we don't have to discuss the past. Then how can this work if the past is what's wrong with me?",
        "suggestion": "We don't have to retell painful events to begin. We can work with how closeness or numbness feels here, in small amounts you choose, and learn what helps you stay present now."
      }
    ],
    "case-carlos": [
      {
        "text": "[Defensive] Is this going to make me soft? I still need people to know not to mess with me.",
        "suggestion": "You want to be able to stand up for yourself. Understanding your feelings does not mean giving up your boundaries. It can help you speak firmly without using anger to frighten people or losing sight of what you want to say."
      },
      {
        "text": "[Tense] Why talk feelings instead of giving me tools I can use when I am heated?",
        "suggestion": "We can work on something you can use when the anger rises. Understanding what you feel just before it helps us choose what to practice, such as stepping away or saying what bothered you. The point is to turn that understanding into a different action."
      },
      {
        "text": "[Tense and angry] How does this help when someone disrespects me in front of my family?",
        "suggestion": "You want to respond when someone disrespects you. Exploring what happens inside can help us separate what you want to say from the urge to lash out. Then we can practice a firm response that does not frighten or hurt anyone."
      },
      {
        "text": "[Skeptical] How does feeling more keep me from losing my edge and getting walked over?",
        "suggestion": "You worry that understanding your feelings means giving up your strength. The aim is to help you recognize what matters and set a clear limit, while taking responsibility for how you treat people. We can work on being firm without using intimidation."
      },
      {
        "text": "[Defensive] If anger is what protects me, why would I spend therapy trying to feel what is underneath it?",
        "suggestion": "Anger feels protective, and you want to keep that protection. Exploring what sets it off can help us understand what you need to stand up for. We can work on protecting your boundaries without letting the anger become harmful."
      },
      {
        "text": "[Tense] How is breathing supposed to matter when I'm already two seconds from snapping?",
        "suggestion": "When you are that close to snapping, breathing alone may not be enough. We also need to understand how the pressure builds before that point. Noticing the earlier signs can help you step away before anyone is frightened or hurt."
      },
      {
        "text": "[Tense and angry] How do I demand respect without acting like somebody can walk over me?",
        "suggestion": "We can work on saying clearly what you will and will not accept. Understanding the feeling behind that need for respect helps us choose words for it. The goal is a boundary you can stand by without making a threat."
      },
      {
        "text": "[Defensive] I learned you have to hit first, so why would slowing down help?",
        "suggestion": "You learned to hit first when you expected danger. We need ways to respond now that do not harm people. Slowing down lets us examine what feels threatening and practice another action, such as stepping away before you strike."
      },
      {
        "text": "[Guilty] My kid saw me angry. How does talking about feelings help him?",
        "suggestion": "Talking alone cannot undo what your child saw. Understanding how the anger builds can help you work on changing what happens at home. That also includes taking responsibility with your child, without asking them to make you feel better about it."
      },
      {
        "text": "[Defensive] How do we keep this from becoming years of talk while my family waits?",
        "suggestion": "You want your family to see change soon. We can focus on the situations where the anger does most harm, understand what happens before it, and practice another response. We also need to check what actually changes at home, rather than assume that talking is enough."
      },
      {
        "text": "[Sceptical] When you ask what the anger feels like, I think you're asking me to get more worked up. That's exactly what I'm trying to stop.",
        "suggestion": "You want to avoid getting carried away. We can approach the anger in small amounts and notice what sets it off, without acting on it, so you have more choice before it takes over."
      },
      {
        "text": "[Firm] I don't want to spend an hour feeling sorry for myself. I want my family to stop being afraid of me.",
        "suggestion": "Your family's safety is the goal. Understanding the hurt or threat around your anger can help you recognise it sooner and respond without intimidation; it doesn't excuse frightening them. We can approach it without pushing you past what you can manage."
      }
    ],
    "case-nina": [
      {
        "text": "[Guilty] Isn't it selfish to focus on my feelings when everyone needs something from me?",
        "suggestion": "It feels selfish to turn toward your own feelings. They can help us notice your needs and limits, including when you are exhausted. Making room for those needs is part of finding ways to care for others without wearing yourself out."
      },
      {
        "text": "[Apologetic] What does noticing my body even do when guilt hits before I think?",
        "suggestion": "Noticing your body gives us another way to recognize the guilt, even when it comes before a clear thought. That can help us pause and understand what you need before deciding whether to say yes. We can begin with whatever you already notice."
      },
      {
        "text": "[Worried] How is emotion work supposed to help when I need practical steps before I drown?",
        "suggestion": "You need something to change in daily life. Listening to your feelings can help us understand where the load is too much and what support or limit you need. We can use that to choose one practical step, rather than give you another list to manage."
      },
      {
        "text": "[Worried] How does focusing on guilt help me say no when I already feel bad?",
        "suggestion": "The aim is not to make you feel more guilty. We can explore what saying no seems to mean about you, and whether the guilt fits what you are actually asking for. That helps us work on a limit you can stand by, even if guilt is still there."
      },
      {
        "text": "[Worried] If people might leave when I stop helping, how is naming needs supposed to help?",
        "suggestion": "Naming your needs cannot guarantee that someone will stay. It helps us understand what you want from the relationship, what you fear, and who is able to respond. We can consider those things together before you decide what to ask for."
      },
      {
        "text": "[Hesitant] Can we just fix my schedule? Talking about needs sounds like another task.",
        "suggestion": "You want less to do, not another assignment. We can look at the schedule together. Paying attention to your needs helps us decide what actually has to change, rather than make you better at fitting everything in."
      },
      {
        "text": "[Worried] What if saying no always feels wrong no matter how much we talk?",
        "suggestion": "You do not have to wait for saying no to feel easy. We can understand what brings the guilt and practice a small limit that fits your needs and responsibilities. The aim is more choice, even while the feeling is there."
      },
      {
        "text": "[Worried] How does asking for help get easier when needing anything feels like too much?",
        "suggestion": "We can begin with a small, specific request and notice what makes it hard to ask. That helps us understand the shame and choose someone you can reasonably turn to. You do not have to ask for everything at once."
      },
      {
        "text": "[Guilty] If I focus on needs, won't I become the needy person I dislike?",
        "suggestion": "You are afraid that having needs will change you into someone you dislike. Exploring them can help you choose what to ask for and where to set a limit, instead of waiting until you are worn out. You can value caring for others and make room for yourself."
      },
      {
        "text": "[Tired] How will I know this is actually helping and not just making me more self-focused?",
        "suggestion": "We can look for changes you actually want: asking for help more directly, getting some rest, or saying no when you are exhausted. That helps us check whether attention to your feelings is changing daily life."
      },
      {
        "text": "[Apologetic] I could name what I need for a whole hour. Then I go home and everyone still needs things. What would actually be different?",
        "suggestion": "Naming your needs won't remove the demands. It can help you recognise your own limits before exhaustion makes every choice harder, so caring for others can include caring for yourself. We can begin with a situation you want to understand."
      },
      {
        "text": "[Worried] If we make room for my resentment, won't I just become less kind? Being useful is something I actually value.",
        "suggestion": "We can respect how much kindness matters to you. Listening to resentment may help you notice when giving has gone beyond what you can sustain, rather than letting it build until kindness feels impossible. We can listen to just a little of it at a time."
      }
    ],
    "case-aisha": [
      {
        "text": "[Worried] What if talking about being left makes me want to hurt myself again before I can stop it?",
        "suggestion": "That fear needs our attention before we go into the pain. First, I need to understand whether you might hurt yourself now. Then we can agree on support and pacing; exploring feelings should not mean pushing you beyond what you can manage."
      },
      {
        "text": "[Desperate] I need you to promise you will never leave, or I do not see how this helps.",
        "suggestion": "You need to know what you can rely on. I cannot promise never to leave, but I can be clear about our appointments, contact, and any ending. Exploring what those limits bring up can help us plan support for the times that feel hardest."
      },
      {
        "text": "[Panicked] If you cancel, how does naming the alarm stop me from doing something drastic?",
        "suggestion": "Naming the fear alone is not enough. When you say \"something drastic\", do you mean hurting yourself or ending your life? We need to understand that first, then agree on what support you can use if a session is cancelled."
      },
      {
        "text": "[Worried] What if my feelings are too much for any therapist to work with?",
        "suggestion": "You worry that your feelings will be too much, even here. We can begin with a small part and notice what helps or makes it harder. That helps us choose the pace and support you need, rather than ask you to bring everything at once."
      },
      {
        "text": "[Panicked] When I am panicking, why ask about feet and breathing instead of just calming me down?",
        "suggestion": "I am trying to help you notice something in the room while the panic is strong. The chair or the floor may give you a point to return to. We can see whether that helps; if focusing on your breathing makes it worse, we do not need to do that."
      },
      {
        "text": "[Desperate] How does working with this neediness help when reassurance from you feels so urgent?",
        "suggestion": "Reassurance feels urgent, and you want something that helps beyond this moment. We can explore what happens when you fear losing contact, and practice asking for support within clear boundaries. The aim is to find more ways to cope than reassurance from me alone."
      },
      {
        "text": "[Panicked] If we focus on this relationship, won't I get attached and then fall apart when it ends?",
        "suggestion": "You are worried about becoming attached and then facing an ending. We can talk openly about the relationship and its limits from the start. Understanding what closeness and separation bring up helps us plan the work and an ending, rather than leave that fear unspoken."
      },
      {
        "text": "[Worried] How will this help my relationships not blow up when I switch from begging to pushing away?",
        "suggestion": "We can explore what happens just before you shift from asking someone to stay to pushing them away. Understanding the feelings at that point helps us practice saying what you need more directly, or taking a pause before the conversation becomes a fight."
      },
      {
        "text": "[Hesitant] Will this take forever, or am I always going to be this intense?",
        "suggestion": "You want to know whether things can change, and how long it will take. I cannot promise a timetable. We can look for changes that matter to you, such as getting through a goodbye with more support or recovering more easily after a difficult exchange."
      },
      {
        "text": "[Mistrustful] Every therapist boundary sounds like distance, so why would I trust this?",
        "suggestion": "You hear a limit as distance, so simply asking you to trust it would miss the fear. We can explore what each boundary means to you while being clear about what I can offer. That helps us make the work more predictable without promising that the fear will vanish."
      },
      {
        "text": "[Urgent] I can name every feeling. It doesn't stop me panicking when someone goes quiet. What is supposed to happen after I name it?",
        "suggestion": "Naming is only a beginning. We can work slowly with the panic and what you need in that moment, so you aren't left just describing it or urgently trying to make someone else remove it."
      },
      {
        "text": "[Sceptical, scared] If we practise being with the fear here, does that mean you're teaching me to accept people leaving me?",
        "suggestion": "Your need for connection matters. The aim is to understand the fear and what you need, so panic doesn't have to decide every action. We can approach it at a pace you choose; needing people isn't something we're trying to remove."
      }
    ],
    "case-david": [
      {
        "text": "[Controlled] Why focus on feelings when I need results people can actually see?",
        "suggestion": "You want changes that show in daily life. Feelings are part of what happens before you withdraw or speak sharply. Understanding those moments can help you choose how to respond, and we can check together whether it makes a difference at home and work."
      },
      {
        "text": "[Skeptical] How is this practical if I do not want to be psychoanalyzed or reduced to childhood?",
        "suggestion": "We stay practical by starting with present moments you want changed. History comes in only if it helps explain why a reaction gets so fast or intense, so the work stays in service of steadier choices now."
      },
      {
        "text": "[Challenging] Will this help my marriage or is this just about me?",
        "suggestion": "Your responses are part of what happens between you and your wife. Exploring what you feel before you withdraw or speak sharply can help you choose a different response. We can check whether that changes the conversations, without assuming your work alone will fix the marriage."
      },
      {
        "text": "[Controlled] I already know the theory. Why spend time on feelings instead of fixing behavior?",
        "suggestion": "Knowing the theory and noticing your reaction in the moment are different things. We can look closely at what you feel just before the behavior you want to change. That gives us something specific to practice, beyond knowing how it should work."
      },
      {
        "text": "[Wounded but sharp] My emotions are the problem. Why would we focus on the thing that keeps messing everything up?",
        "suggestion": "You see how much damage the reactions cause. Exploring the feelings can help us understand what happens before they turn into withdrawal or sharp words. The aim is to give you more choice about what you do with the feeling, not make it stronger."
      },
      {
        "text": "[Demanding] I need anger control, not a deep dive into what I feel under it.",
        "suggestion": "You want to stop the anger doing damage. We can work on that directly, including what happens before an outburst. Looking at the feelings involved is a way to recognize the build-up earlier, not a requirement to reveal everything at once."
      },
      {
        "text": "[Challenging] Can we skip childhood stuff and stay with what is happening now?",
        "suggestion": "Yes, we can stay present-focused. We only name earlier patterns if they show up in today's reactions, so history serves change instead of becoming a detour."
      },
      {
        "text": "[Worried] What if I do not feel anything when you ask me to look inside?",
        "suggestion": "Not feeling anything is a place to begin, not a failed exercise. We can explore what that is like and whether you notice even a small change as we talk. The purpose is to understand your experience, without requiring a feeling you do not have."
      },
      {
        "text": "[Demanding] I need quick wins; I do not want another endless insight project.",
        "suggestion": "You want something to change soon. We can choose one situation where your reaction causes problems and work on what you feel before it happens. Then we can check whether a different response helps, rather than measure progress by insight alone."
      },
      {
        "text": "[Controlled] How will I know this is worth it instead of another insight project?",
        "suggestion": "We use concrete markers because insight alone will not be enough: less shutdown in hard conversations, quicker repair after you miss, and more room to stay present when shame gets hit."
      },
      {
        "text": "[Coolly] I can explain my childhood perfectly well. It hasn't changed anything. Why would another conversation about feelings be different?",
        "suggestion": "You want more than another explanation. The aim is to notice what happens to you as you speak, so we can meet the hurt in the moment rather than only explain it afterwards. We can try a small piece and check how it is for you."
      },
      {
        "text": "[Guarded] If I let you see how much the criticism hurt, what stops this turning into an exercise in taking me down a peg?",
        "suggestion": "Being diminished is precisely what you don't want. The aim is to understand the injury beneath the need to defend yourself, without stripping away your dignity; you can tell me when the work feels diminishing."
      }
    ],
    "case-marcus": [
      {
        "text": "[Flat] Talking will not change what happened, so why open the door to it?",
        "suggestion": "You are right that talking cannot change what happened. The aim is to help with how it affects your life now. We can begin with what you notice today, without asking you to retell the worst parts of the past."
      },
      {
        "text": "[Slow and flat] I do not want to get flooded; when I lose control, I disappear for days.",
        "suggestion": "Losing days is something we need to take seriously. We can begin with what helps you stay present and agree on when to pause. The aim is to understand a small part of your experience at a manageable pace, not push through a memory."
      },
      {
        "text": "[Slow and flat] Feelings are the problem. When I feel them, I drink, shut down, or lose days.",
        "suggestion": "Those reactions tell us we need to be careful about how we work. We can start with what happens before you drink or shut down, without asking you to open everything. That helps us understand what support and pace you need before going further."
      },
      {
        "text": "[Flat] Why notice the guard signals when I am on alert all the time?",
        "suggestion": "If you are on alert all the time, asking you to notice more can sound exhausting. We can look for when that alertness changes and what helps it ease. That gives us something specific to work with instead of asking you to monitor every signal."
      },
      {
        "text": "[Hypervigilant] How will sitting with feelings help the nightmares instead of making the nights worse?",
        "suggestion": "You are worried the nights will get worse. We do not need to retell the nightmares to begin. We can explore how they affect you now and what helps you recover afterwards, then check whether any further work is helping or making things harder."
      },
      {
        "text": "[Flat] How is working on connection supposed to help when being alone keeps people from wanting things from me?",
        "suggestion": "Being alone gives you relief from other people's demands. We can explore what kind of contact, if any, you would actually want. This is about finding support while keeping your choice and boundaries, not persuading you to let everyone in."
      },
      {
        "text": "[Flat] What does progress look like for me if feeling normal is off the table?",
        "suggestion": "We can begin with what would make daily life more manageable for you. Progress might mean better sleep, a little interest in something, or an easier moment with another person. Looking for changes you value helps us decide whether the work is useful; \"normal\" does not have to be the measure."
      },
      {
        "text": "[Low voice] Why should I trust this if therapists usually push for stories I do not want to tell?",
        "suggestion": "You have reason to ask how this will be different. I can explain why I ask a question and check whether you want to go there. That helps us choose the work together; you do not have to tell a story just because I ask."
      },
      {
        "text": "[Hesitant] Can we keep this practical and not dig through every bad thing?",
        "suggestion": "Yes, we can focus on what affects your days now. Understanding the feelings involved can help us choose useful changes, without going through every painful event. You can decide with me what is relevant and what to leave aside."
      },
      {
        "text": "[Slow and flat] What if I never feel normal again and this flatness is just who I am now?",
        "suggestion": "You are afraid the flatness is permanent. I cannot tell you now how it will change, but we can look at what makes life harder or a little easier. The aim is to find changes that matter to you, without requiring you to feel like someone else."
      },
      {
        "text": "[Flat] Telling the story didn't help before. It just meant I didn't sleep. I'm not doing that again.",
        "suggestion": "You have reason to be cautious. We can begin with what happens here now, without retelling the events, and keep the work small enough that you can stay present and choose whether to continue."
      },
      {
        "text": "[Guarded] The numbness lets me get through the day. Why would I want you to get rid of the thing that's keeping me going?",
        "suggestion": "We won't try to take your protection away. The aim is to find moments when you can feel a little without losing your footing, so numbness doesn't have to be your only way through the day."
      }
    ]
  },
  "empathic-explorations": {
    "case-sara": [
      {
        "text": "[Softly] Seeing his name pop up still throws me, and I hate how much it matters.",
        "suggestion": "Seeing his name still throws you, and you hate that it matters so much. Could we pause with that feeling for a moment and notice what is here now?"
      },
      {
        "text": "[Embarrassed] I tell friends I'm fine, and then I worry they can hear that I am not.",
        "suggestion": "You try to sound fine, and it feels risky that they might hear how not fine you are. Find the moment when being heard starts to feel dangerous."
      },
      {
        "text": "[Tearful] I feel lost after the breakup, like I do not know what to do with the evenings.",
        "suggestion": "The evenings are where the lostness shows up most clearly. Bring one evening close and sense what feels hardest when there is nowhere to put yourself."
      },
      {
        "text": "[Softly] I wrote 'sorry' to him three times, then realized I do not know what I was trying to fix.",
        "suggestion": "Writing sorry was a reach toward repair, and then the ground disappeared under what you were trying to fix. Slow down at that unclear place and see which feeling appears."
      },
      {
        "text": "[Panicked] I delete photos to prove I am done, then panic and look for them again.",
        "suggestion": "One move says, 'be done,' and then the panic says this ending is not that simple. Pause in the moment between deleting and searching."
      },
      {
        "text": "[Embarrassed] When someone is kind to me, my eyes drop before I can stop it.",
        "suggestion": "Your eyes drop as soon as someone is kind. Could we slow that moment down and notice what you feel as you receive the kindness?"
      },
      {
        "text": "[Softly] For a few seconds after I wake up, I forget he is gone, and then I remember.",
        "suggestion": "There is that brief relief, and then the loss returns all at once. Let the moment of remembering be here before you have to do anything with it."
      },
      {
        "text": "[Embarrassed] I am sad, and then I get embarrassed that I am still talking about it.",
        "suggestion": "Sadness is here, and embarrassment quickly asks whether you should still be talking about it. Give both a little room and notice which one is stronger now."
      },
      {
        "text": "[Tearful] When I see couples holding hands, I get upset and then feel childish for wanting that.",
        "suggestion": "Seeing them brings up the wanting, and then shame moves in around the wanting. Keep close to the wanting for a moment before shame moves in."
      },
      {
        "text": "[Embarrassed] If I let someone see the whole mess, I imagine them quietly wishing I would stop.",
        "suggestion": "Part of you wants someone to see how bad it is, and another part expects them to wish you would stop. Track that pull between wanting to be seen and expecting rejection."
      },
      {
        "text": "[Tearful] I had something funny to tell him on the bus. For a moment I forgot we weren't together. Remembering was the sad part.",
        "suggestion": "The sadness arrives when you remember you can't tell him. Could we stay for a moment with how that lands now?"
      },
      {
        "text": "[Softly] My sister didn't tell me to move on. She just stayed. I felt relieved, and I think there's more to it than that.",
        "suggestion": "There's relief in her simply staying. Take a little time with that relief and see what else you notice."
      }
    ],
    "case-michael": [
      {
        "text": "[Firm] When someone corrects one detail, I keep hearing it afterward like I was called out.",
        "suggestion": "The correction stays with you as though you were called out. As you say that now, what do you notice in yourself?"
      },
      {
        "text": "[Tense and angry] I walk into meetings already ready for somebody to disrespect me.",
        "suggestion": "You enter already on guard, before anything has happened. Let yourself feel what it is like to walk in already ready for disrespect."
      },
      {
        "text": "[Tense] After I blow up at home, I tell myself they pushed me, but I still feel lousy.",
        "suggestion": "One part says they pushed you, and another part is left with that lousy feeling afterward. Keep close to the lousy feeling before the argument about blame takes over."
      },
      {
        "text": "[Ashamed] Sometimes I want to throw my phone after a work message, and then I feel ridiculous.",
        "suggestion": "The urge comes fast, and then you are left looking at yourself with shame. Pause with the shame that follows, just before it calls you ridiculous."
      },
      {
        "text": "[Defensive] A small sigh from my wife can feel like she has already decided I am the problem.",
        "suggestion": "That small sigh lands like a decision has already been made about you. Slow down at the first flare and notice what it says you are being accused of."
      },
      {
        "text": "[Tense] When I do not know the answer, I get tense and start talking like I know anyway.",
        "suggestion": "You get tense just before you start sounding certain. Could we pause with that tension and notice what it is like not to have the answer?"
      },
      {
        "text": "[Ashamed] I reread every message before sending because one mistake will bother me all night.",
        "suggestion": "One possible mistake can stay with you for hours, so the checking becomes hard to stop. Find the first moment when checking starts to feel necessary."
      },
      {
        "text": "[Tense and angry] The second I feel weak, I get angry and hear my dad saying that is exactly the problem.",
        "suggestion": "'Weak' brings anger and your father's judgment in very fast. Pause at the instant when weakness first shows up."
      },
      {
        "text": "[Ashamed] Some nights I replay every word I said, trying to find where I messed it up.",
        "suggestion": "You replay every word, looking for the moment you got it wrong. Sense what happens inside when you think you have found the mistake."
      },
      {
        "text": "[Vulnerable] I want my son to feel safe around me, and I do not know how to say that without sounding weak.",
        "suggestion": "You want safety for him so much, and even naming that wish brushes against the old weakness rule. Let the wish itself have a moment before the rule closes around it."
      },
      {
        "text": "[Quietly] My son asked whether I'd be at his game. I said yes, but the way he asked made me sad. Like he couldn't quite count on it.",
        "suggestion": "There's sadness in hearing that uncertainty from him. What is it like to let yourself notice it here, without fixing it straight away?"
      },
      {
        "text": "[Frustrated, then hesitant] I was furious about the correction. Then I realised I was disappointed in myself as well. That bit is harder to talk about.",
        "suggestion": "The disappointment in yourself is harder to approach. We can go slowly and stay with just the bit you can put words to."
      }
    ],
    "case-jason": [
      {
        "text": "[Quietly] When it is my turn to speak, I lose track of what I was going to say.",
        "suggestion": "The words disappear when it is your turn. Could we take that moment slowly and notice what happens inside before you try to find the sentence again?"
      },
      {
        "text": "[Hesitant] I hover over send, then delete the text because wanting contact suddenly feels humiliating.",
        "suggestion": "The wish for contact is there, and humiliation makes the message hard to let exist. Keep the wanting in focus for a moment before the deleting happens."
      },
      {
        "text": "[Fearful] I got invited to a birthday party, and part of me was excited, but then I started worrying I would ruin it.",
        "suggestion": "There is excitement about being invited, and then worry starts to crowd it. Give the excitement a little space before the worry crowds it."
      },
      {
        "text": "[Quietly] If I meet someone's eyes too long, I assume they can tell how awkward I am.",
        "suggestion": "Eye contact starts to feel like they can see the awkwardness you are trying to hide. Hold on the first second of being seen."
      },
      {
        "text": "[Embarrassed] After meetings, one small awkward pause can make me cringe for the rest of the day.",
        "suggestion": "That one pause keeps coming back long after the meeting. Slow it down and notice what the cringe says about how you think you were seen."
      },
      {
        "text": "[Anxious] When I walk into a room, I look for the exit before I decide whether to join anyone.",
        "suggestion": "You look for the exit before you decide whether to join anyone. Could we pause at that moment and notice what you feel as you look around?"
      },
      {
        "text": "[Quietly] Before I introduce myself, I start imagining how strange I will sound.",
        "suggestion": "Even before you speak, the moment is already becoming a test of how you will come across. Pause before the introduction and sense the imagined strangeness."
      },
      {
        "text": "[Hesitant] I compare myself to everyone there and always decide I am the least interesting person.",
        "suggestion": "The comparison ends with you at the bottom, and it hurts before anyone has actually rejected you. Let that hurt have a moment."
      },
      {
        "text": "[Blank] Sometimes I pretend to text so small talk does not have to start.",
        "suggestion": "The phone gives you a way to pause the contact, and a little cover from being put on the spot. See what happens just before you reach for that cover."
      },
      {
        "text": "[Quiet and ashamed] I felt lonely on Sunday, but I also ignored two messages.",
        "suggestion": "Loneliness and pulling back sit side by side. Keep close to the loneliness that is there even while the messages go unanswered."
      },
      {
        "text": "[Quietly pleased] They asked me to join them again. I felt pleased when I read it. Then I started worrying about what I'd say.",
        "suggestion": "Before the worry arrived, there was that pleased feeling. Could we give it a little room and notice what being invited again was like?"
      },
      {
        "text": "[Hesitant] I wish my friend had waited for me after the meeting. I don't usually admit wishing for things like that. It feels a bit sad saying it.",
        "suggestion": "Saying you wanted him to wait brings some sadness. You don't have to explain it away; we can listen to what that sadness is like."
      }
    ],
    "case-laura": [
      {
        "text": "[Slow and flat] Most days are flat, but if sadness flickers I push it down before it spreads.",
        "suggestion": "You notice a little sadness and quickly push it down. If you want to, we can stay with just the bit you have already noticed, without trying to make it stronger."
      },
      {
        "text": "[Fearful] Raised voices do not even have to be aimed at me; I just go quiet and wait for it to pass.",
        "suggestion": "Even when the anger is not directed at you, your whole system goes quiet and waits. We can stay with that waiting just long enough to notice what it is listening for."
      },
      {
        "text": "[Tense and guarded] When my neighbor brought soup, I thanked her and then spent the night wondering what she wanted.",
        "suggestion": "The kindness came, and suspicion came almost with it. I want to pause in the gap between being offered care and having to search for a catch."
      },
      {
        "text": "[Flat and guarded] I pour wine after the dishes because the quiet gets loud, and I don't want to hear my own thoughts.",
        "suggestion": "After the dishes, the quiet gets loud, and wine gives you a way not to hear it. Could we stay for a moment with the quiet before you have to mute it?"
      },
      {
        "text": "[Distant] I check the locks twice in the morning too, and then feel foolish because nothing happened.",
        "suggestion": "Even in daylight, checking the locks leaves you caught between fear and feeling foolish. We can slow down the moment before the second check."
      },
      {
        "text": "[Ashamed] Even gentle touch makes me jump, and then I hate that my reaction is so obvious.",
        "suggestion": "You startle, and then feel ashamed that someone saw it. Could we stay with what it is like for you just after that reaction?"
      },
      {
        "text": "[Slow and flat] When good news comes, I can say the right words, but I feel almost nothing.",
        "suggestion": "The words know how to respond, while the feeling stays out of reach. Maybe we can be with that almost-nothing without making it perform."
      },
      {
        "text": "[Distant] Sometimes a song cracks something open, and for a minute I can almost feel the sadness.",
        "suggestion": "The song reaches through the numbness for a minute. I would like to linger where sadness is almost available, before it slides away."
      },
      {
        "text": "[Tense and guarded] When I imagine asking someone to sit with me, I immediately think of all the reasons they should not have to.",
        "suggestion": "The wish for comfort appears, and immediately the reasons against it line up. We can stay with the wish before it has to defend itself."
      },
      {
        "text": "[Slow and flat] I avoid movies with fighting because I don't want to find out what a single shout will do to me.",
        "suggestion": "Avoiding the movie protects you from discovering what one shout might set off. I want to pause with the not-wanting-to-find-out."
      },
      {
        "text": "[Quiet, surprised] My friend left a meal by the door. I didn't have to invite her in or talk. I felt touched, which surprised me.",
        "suggestion": "You were touched by being cared for without having to let her in. We can stay with a little of that feeling, just as it is."
      },
      {
        "text": "[Guarded, with a pause] I don't want to see him again. I still felt sad when he said he'd stopped asking. Those two things don't seem to fit.",
        "suggestion": "Not wanting contact and feeling sad that he stopped asking are both here. Could we make a little room for the sadness without making it a decision to see him?"
      }
    ],
    "case-carlos": [
      {
        "text": "[Defensive] My wife says she can hear my tone change before I notice anything is wrong.",
        "suggestion": "Your wife hears your tone change before you notice it yourself. Could we slow down one of those moments and see what you first notice in yourself?"
      },
      {
        "text": "[Tense] After a fight, I can stand in the hallway not knowing whether to apologize or pretend nothing happened.",
        "suggestion": "That hallway moment has repair and escape both available. I would like to stay with the not-knowing before either move wins."
      },
      {
        "text": "[Fearful] If I back off in an argument, I start feeling like I am losing my place, and then I need to push back.",
        "suggestion": "Backing off starts to feel like losing your place, and pushing back becomes the way to find it again. We can pause at the first sign that your place is slipping."
      },
      {
        "text": "[Ashamed] My boy's flinch keeps replaying, and I hate that he learned that fear from me.",
        "suggestion": "Your son's flinch keeps bringing you back to love and shame at the same time. I want to stay with the ache of seeing fear connected to you."
      },
      {
        "text": "[Tense] When it gets calm after a fight, I start waiting for someone to bring it up again.",
        "suggestion": "Even calm feels provisional, as if the fight could restart any second. Maybe we can notice what you are waiting for in that quiet."
      },
      {
        "text": "[Tense and angry] I can feel the pressure building before I throw something, but in that second stopping feels impossible.",
        "suggestion": "You notice the pressure building, and stopping feels impossible. Could we look slowly at that first sign of pressure, without acting on it, and notice what is happening in you?"
      },
      {
        "text": "[Defensive] If I let myself be soft, I don't know whether people will respect me or take advantage.",
        "suggestion": "Softness raises the question of respect or being used. I want to stay with that uncertainty without pushing you toward either answer."
      },
      {
        "text": "[Angry, clenching fists] When I feel disrespected, I talk louder because I need them to know it got to me.",
        "suggestion": "The louder voice is trying to make sure they know it got to you. We can stay with the part that needs the hurt recognized."
      },
      {
        "text": "[Fearful] When I say I want them safe, I feel my anger drop and something softer scare me.",
        "suggestion": "When anger drops, the wish for safety is exposed, and that softer place feels frightening. I would like to stay with the wish before you cover it."
      },
      {
        "text": "[Fearful] When I start feeling small in an argument, panic hits and I feel like I have to get bigger fast.",
        "suggestion": "Smallness brings panic, then the pressure to get bigger fast. We can slow the first moment of smallness, before the bigger stance takes over."
      },
      {
        "text": "[Low voice] My daughter leaned against me watching television. I didn't say anything. I was glad she stayed there. I'm glad again saying it now.",
        "suggestion": "There's gladness here again as you tell me. Let yourself have a moment with what her staying close felt like."
      },
      {
        "text": "[Angry, then slowing] He made the joke in front of everyone. I laughed along. Afterwards I felt hurt, which is harder to admit than being angry.",
        "suggestion": "The hurt is harder to show than the anger. We can stay with only as much of that hurt as you want to bring here."
      }
    ],
    "case-nina": [
      {
        "text": "[Tired] The second I ask for help, guilt rushes in and I want to pull it back.",
        "suggestion": "You ask for help, and guilt comes so quickly that you want to take it back. Could we stay for a moment with what you feel as you ask?"
      },
      {
        "text": "[Guilty] I keep folding laundry and answering messages so I do not have to feel resentful.",
        "suggestion": "Keeping busy keeps resentment from having room. We can pause at the moment when stopping would make it audible."
      },
      {
        "text": "[Torn] When I say no, I keep explaining until the no almost disappears.",
        "suggestion": "The no begins clearly, and then explanations thin it out. I would like to stay where the no is still plain and notice what makes it hard to leave there."
      },
      {
        "text": "[Tired] Even asking for a small ride comes out with three apologies.",
        "suggestion": "The apologies arrive before the ride request can stand by itself. Maybe we can linger with the small need before it has to apologize."
      },
      {
        "text": "[Guilty] If the kitchen is messy when someone stops by, I feel caught, like they can see I am not keeping up.",
        "suggestion": "The messy kitchen becomes a moment of being caught, of others seeing you are not keeping up. We can pause where ordinary mess turns into exposure."
      },
      {
        "text": "[Torn] When everyone needs me at once, I start saying yes before I know what I actually want.",
        "suggestion": "The yes comes before you know what you want. Could we pause just before that yes and give your own wish a little time to become clearer?"
      },
      {
        "text": "[Guilty] Sometimes I imagine someone making me tea and telling me to sit down, and then I feel selfish for even picturing it.",
        "suggestion": "The image of being cared for appears, and selfishness quickly moves in to judge it. We can stay with the cared-for wish before the judgment arrives."
      },
      {
        "text": "[Apologetic] I volunteer before anyone asks, then later I am bitter that nobody sees how tired I am.",
        "suggestion": "You offer before the request is even spoken, and later the tiredness has nowhere to be seen. I would like to stay with the cost that stayed invisible."
      },
      {
        "text": "[Torn] Next to other moms I shrink, like they all know a rule I missed.",
        "suggestion": "Beside other mothers, you shrink around this sense that there is a rule you missed. Maybe we can stay with that outside feeling a little longer."
      },
      {
        "text": "[Tired] By bedtime I can't tell if I am sad, angry, or just completely used up.",
        "suggestion": "By bedtime, sadness, anger, and exhaustion are tangled together. We can stay with the tangle before we try to name one strand."
      },
      {
        "text": "[Tearful, smiling] My colleague said I didn't have to earn the afternoon off. I laughed, but I wanted to cry. There was relief in hearing it.",
        "suggestion": "You felt relief at not having to earn the rest. Could we slow down at that relief before the smile moves us past it?"
      },
      {
        "text": "[Quietly] I was angry when they assumed I'd organise it again. Then I felt guilty. Even now, the guilt comes before I can finish saying I was angry.",
        "suggestion": "The guilt arrives so quickly that the anger barely gets a sentence. We can pause and let you finish that sentence, without needing to act on it."
      }
    ],
    "case-aisha": [
      {
        "text": "[Panicked] If a reply doesn't come, I tell myself it shouldn't matter, but then I can't focus on anything else.",
        "suggestion": "One part says it should not matter, and another part cannot let go of the missing reply. What do you notice in the part that cannot let go?"
      },
      {
        "text": "[Confused and embarrassed] I can ask someone not to leave and then want them away from me seconds later. I do not understand which part is actually me.",
        "suggestion": "Both movements are there: reaching and pushing away. What changes inside in the seconds between asking them to stay and wanting them gone?"
      },
      {
        "text": "[Desperate] When I scratch, part of me says it is not a big deal, and another part is scared you will judge me.",
        "suggestion": "One part makes the scratching small, and another part watches for my judgment. As you say that here, which part feels closer?"
      },
      {
        "text": "[Hurt and guarded] If you glance at the clock, I start wondering whether I should stop talking before you end it.",
        "suggestion": "The glance at the clock starts that pull to stop first, before I can end. What is the first feeling that comes up right then?"
      },
      {
        "text": "[Guarded] I ask people things I already half-know, just to see if they will give the answer in the right way.",
        "suggestion": "You are listening not only for the answer, but for whether it comes in the right way. What do you notice when it lands even slightly wrong?"
      },
      {
        "text": "[Desperate] When someone says goodbye, I know it is normal, but I get scared and angry at the same time.",
        "suggestion": "You know goodbye is normal, and still feel scared and angry. As you imagine that goodbye now, what do you notice first in yourself?"
      },
      {
        "text": "[Panicked] Kindness makes me sob, and another part of me wants to bolt.",
        "suggestion": "Kindness brings sobbing and the urge to bolt at the same time. Where do you notice yourself first: in the sobbing, or in the pull to get away?"
      },
      {
        "text": "[Ashamed] When I remember what was done to me, I want to scrub my skin even though I know nothing is there.",
        "suggestion": "Remembering it brings a scrub-it-off feeling even when nothing is visible. What do you notice as that shame comes close here?"
      },
      {
        "text": "[Desperate] I keep checking the door, and I can't tell if I am angry you will leave or scared you might forget me.",
        "suggestion": "At the door there is anger and fear tangled together: leaving, being forgotten. As you look toward the door now, which side is closer?"
      },
      {
        "text": "[Hurt] If you cancel, a part of me says not to come back, even while another part wants to ask when you will be here again.",
        "suggestion": "Both parts appear around the cancellation: the part that wants to disappear and the part that needs to know there is still a place here. Where do you feel that split most strongly?"
      },
      {
        "text": "[Softer, watching the therapist] I was angry that you didn't agree with me. I'm still angry. But I'm also sad that I wanted your agreement so badly.",
        "suggestion": "The anger is still here, and sadness is appearing alongside it. We can take a little time with that sadness without asking the anger to disappear."
      },
      {
        "text": "[Quiet, uneasy] I felt relieved when she said she'd call tomorrow. Then I couldn't let myself enjoy it. The relief is still there a little, though.",
        "suggestion": "A little relief is still available, even with the uneasiness. Could we notice just that small amount, without deciding what tomorrow will bring?"
      }
    ],
    "case-david": [
      {
        "text": "[Controlled] When she says I am cold, part of me wants to prove her wrong and another part wants to disappear.",
        "suggestion": "You want to prove her wrong and disappear at the same time. Could we pause with those two pulls and notice how each feels right now?"
      },
      {
        "text": "[Controlled] You seem calm when I talk about failure, and I cannot tell if I respect that or resent it.",
        "suggestion": "The calm you see lands in two ways at once: something respects it, and something resents it. Which side is louder as you talk about my calm?"
      },
      {
        "text": "[Defensive] When I feel judged, I smooth my shirt and start listing achievements.",
        "suggestion": "When judgment appears, the achievements come in quickly. What is the first signal that you are being judged, before the list starts?"
      },
      {
        "text": "[Controlled] Praise works for maybe ten seconds; then I start looking for the part they missed.",
        "suggestion": "The praise reaches you briefly, and then the search for what was missed takes over. Where does it stop landing?"
      },
      {
        "text": "[Dismissive] In hard talks, I check my phone the moment I feel cornered.",
        "suggestion": "When you feel cornered, the phone gives you a little distance. What is the cornered feeling like just before the phone comes out?"
      },
      {
        "text": "[Irritated] When my kids cry, I get impatient before I even know why.",
        "suggestion": "Your kids' tears bring impatience before you even know why. Where do you first notice that impatient surge?"
      },
      {
        "text": "[Wounded but sharp] Admitting I am wrong makes my face burn like everyone can see the failure.",
        "suggestion": "Admitting you are wrong brings heat to your face, like the failure is suddenly visible. What does that heat say in the moment before you cover it?"
      },
      {
        "text": "[Distant] Since the affair, I do not know whether I want forgiveness or to be left alone.",
        "suggestion": "There is a pull toward forgiveness and another toward being left alone. Which wish feels safer to let me see?"
      },
      {
        "text": "[Wounded but sharp] I want credit without having to ask, because asking makes me feel pathetic.",
        "suggestion": "You want the credit, and asking for it immediately brings that pathetic feeling close. Where does wanting recognition turn into shame?"
      },
      {
        "text": "[Controlled] When someone calls my work fine, I hear ordinary, and I cannot let it go.",
        "suggestion": "'Fine' lands as ordinary, and ordinary becomes hard to tolerate. What do you notice in the instant before you need to prove more?"
      },
      {
        "text": "[Controlled, voice lowering] I was pleased they asked me to stay after the meeting. Not for advice. Just to have a drink with them. I don't usually say that matters.",
        "suggestion": "Being wanted for your company mattered. We can linger there for a moment, before you have to explain or minimise it."
      },
      {
        "text": "[Quiet, guarded] My daughter says she misses me even when I'm home. I felt sad hearing that. Then I started explaining how much pressure I'm under.",
        "suggestion": "You noticed sadness before moving into the explanation. Could we return to just that moment of hearing she misses you?"
      }
    ],
    "case-marcus": [
      {
        "text": "[Slow and flat] Most days I'm numb, and then something hits me and I don't know what it is.",
        "suggestion": "You feel numb, and then something comes through that you cannot name. We can take that slowly; what do you notice of it as you say this now?"
      },
      {
        "text": "[Hypervigilant] After nightmares, I know I should talk about them, but the details feel far away and I don't know where to start.",
        "suggestion": "The details stay far away, and the starting point keeps slipping. What do you notice as you try to begin?"
      },
      {
        "text": "[Quiet and guarded] Crowds make my shoulders rise, and I stay near the wall without deciding to.",
        "suggestion": "The wall seems to matter before you decide anything. What does being near it give you in that first second?"
      },
      {
        "text": "[Low voice] After dark I start wondering whether being alone is safer or just making me worse.",
        "suggestion": "Aloneness feels like protection and maybe harm at the same time. Which side of that question feels closer after dark?"
      },
      {
        "text": "[Low voice] After work I sit in the car because the apartment feels too quiet to enter.",
        "suggestion": "The car gives you a pause before the silent apartment. What does the quiet ask of you before you open the door?"
      },
      {
        "text": "[Quiet and guarded] I let calls go to voicemail because answering means I might have to explain why I am not okay.",
        "suggestion": "The phone rings, and answering could mean explaining that you are not okay. Could we stay with what you feel in that moment, without needing to explain it yet?"
      },
      {
        "text": "[Flat] Good moments happen, but I don't trust them enough to let them count.",
        "suggestion": "The good moment arrives, and mistrust interrupts before it can count. What happens right where it almost starts to matter?"
      },
      {
        "text": "[Low voice] A sudden sound cuts through me, and before I think, I am scanning the room.",
        "suggestion": "The sound cuts through, and the scanning starts before thought catches up. In the first second after the sound, where does your attention go?"
      },
      {
        "text": "[Quiet and guarded] I do not pick up when family calls because I do not want to find out what I feel.",
        "suggestion": "Letting the call go unanswered keeps the feeling away for a while. What starts to come close when you imagine answering?"
      },
      {
        "text": "[Flat] When people tell me I should not be alone so much, I say it is better this way, but I keep thinking about it after.",
        "suggestion": "Saying it is better this way protects you from something, and the thought still follows you. What do you notice after you say it?"
      },
      {
        "text": "[Low voice] I heard his favourite song. Usually I turn it off. This time I listened a bit. Felt sad. Not all at once.",
        "suggestion": "A little sadness came while you listened. We can stay with that little bit; we don't need the whole story."
      },
      {
        "text": "[Guarded, pausing] When you didn't push for more, I was relieved. Still am. Hard to say that to someone.",
        "suggestion": "There's relief that I left you room. We can give that feeling a moment without asking you to say more than you want."
      }
    ]
  },
  "empathic-evocations": {
    "case-sara": [
      {
        "text": "[Softly] After dinner I notice the apartment is quiet, and I start checking my phone again.",
        "suggestion": "The quiet settles around you after dinner, and the phone becomes the one small place where he might still appear."
      },
      {
        "text": "[Numb] I tell people I'm fine, but I feel flat when I say it.",
        "suggestion": "Fine comes out smooth, while something underneath has gone pale and still."
      },
      {
        "text": "[Sad] I found his jacket in the closet and stood there longer than made sense.",
        "suggestion": "That jacket stops you in the doorway, a small piece of him pulling the whole loss back into the room."
      },
      {
        "text": "[Softly] Some mornings I forget for a second, and then I remember we are not together.",
        "suggestion": "There is that one clear second, then the breakup drops back onto you like weight returning to the bed."
      },
      {
        "text": "[Embarrassed] When friends ask how I am, I give a short answer and change the subject.",
        "suggestion": "The short answer closes the door quickly, while the real answer waits tight in your throat."
      },
      {
        "text": "[Sad] I stay on my phone late because going to sleep feels hard now.",
        "suggestion": "It is as if the little light of the phone keeps you company when the night feels hard to face."
      },
      {
        "text": "[Softly] A song came on in a store, and I had to leave before I cried.",
        "suggestion": "The first notes find you in the aisle, and suddenly grief is right there under the fluorescent lights."
      },
      {
        "text": "[Embarrassed] I keep thinking maybe I did something wrong, but I can't pin down what.",
        "suggestion": "The mind keeps searching for the flaw, like if it can find the loose thread, the whole leaving might make sense."
      },
      {
        "text": "[Sad] Some nights I sit on the floor beside the bed for a while instead of getting in.",
        "suggestion": "The floor becomes the place you fold into when the bed feels too exposed and wide."
      },
      {
        "text": "[Softly] When you are kind to me, I feel awkward and look away.",
        "suggestion": "Kindness comes close, and it is almost too warm to take in, so your eyes drop to safer ground."
      },
      {
        "text": "[Matter-of-fact] I took his name off the mailbox. It needed doing. Coming home afterwards was harder than I expected.",
        "suggestion": "As if that small change at the door made the absence inside feel much larger."
      },
      {
        "text": "[Controlled] I keep the evenings busy. When there's nothing planned, I notice how much I miss having someone to tell the little things to.",
        "suggestion": "All the activity goes quiet, and there's that empty place where the day's little stories used to go."
      }
    ],
    "case-michael": [
      {
        "text": "[Firm] When someone corrects me in front of the team, I get hot and stop listening.",
        "suggestion": "It sounds like the heat rises as though a spotlight has suddenly swung onto you in front of everyone."
      },
      {
        "text": "[Tense] I go into meetings expecting people to mess up, and I hate that I do that.",
        "suggestion": "You arrive already braced, like part of you is standing guard at the door before anyone speaks."
      },
      {
        "text": "[Tense] By the end of the day I realize how many comments I did not say.",
        "suggestion": "It is as if the whole day is clenched shut, every sharp sentence still held behind your teeth."
      },
      {
        "text": "[Embarrassed] After I snap, I feel embarrassed, but I mostly try not to think about it.",
        "suggestion": "The embarrassment sits there afterward, heavy and damp, while you try to step around it."
      },
      {
        "text": "[Defensive] When my wife sighs while I am explaining something, I assume she has already decided I am wrong.",
        "suggestion": "That small sigh can cross the room like a charge, and your system braces before she has even spoken."
      },
      {
        "text": "[Tense] If someone says calm down during an argument, I get angrier immediately and stop hearing the rest.",
        "suggestion": "It is as if those two words strike a match, and the anger flares before you can hear anything else."
      },
      {
        "text": "[Embarrassed] When I don't know the answer in a meeting, I feel exposed in front of everyone.",
        "suggestion": "Not knowing opens a bare place, like all the competence you rely on has lost its cover for a second."
      },
      {
        "text": "[Defensive] I slam doors sometimes because I don't know what else to do with the feeling.",
        "suggestion": "The door takes the feeling for you, loud enough to cover the smaller sting underneath."
      },
      {
        "text": "[Ashamed] After a fight, thinking about apologizing first makes me feel weak and smaller than her.",
        "suggestion": "The apology feels like stepping onto lower ground, with everyone suddenly taller around you."
      },
      {
        "text": "[Ashamed] At night I replay the argument and hear how sharp I sounded.",
        "suggestion": "The house goes quiet, but your own voice keeps echoing in the kitchen, still cutting after the fight is over."
      },
      {
        "text": "[Clipped] One small correction in a good report. I heard nothing else they said. That's irritating.",
        "suggestion": "That one correction takes up the whole room, and the good work shrinks out of sight."
      },
      {
        "text": "[Controlled] I know my son is just asking for help. Still, when I can't answer straight away, I feel as if I've failed him.",
        "suggestion": "Even a small question seems to put you under a spotlight where you have to know the answer immediately."
      }
    ],
    "case-jason": [
      {
        "text": "[Quietly] When it's my turn in a meeting, I lose track of what I was going to say.",
        "suggestion": "It is as if every face turns toward you and the sentence you had ready vanishes into thin air."
      },
      {
        "text": "[Hesitant] In meetings I keep my hands under the table because I worry people will notice me.",
        "suggestion": "Even your hands have to stay hidden, as if one small sign could give you away."
      },
      {
        "text": "[Anxious] I practice what to say, but when people look at me, I freeze.",
        "suggestion": "All the practiced words line up, then the eyes land on you and everything locks behind a sheet of ice."
      },
      {
        "text": "[Quietly] If people laugh nearby after I have spoken, I assume I did something strange.",
        "suggestion": "The laugh travels across the room and points itself at you, even before you know what it was about."
      },
      {
        "text": "[Hesitant] When attention turns to me, I get quieter and try not to move much.",
        "suggestion": "Your whole body starts shrinking in the chair, trying to stay present without being seen."
      },
      {
        "text": "[Anxious] When someone compliments me after a meeting, I smile, but I don't really believe it.",
        "suggestion": "It is as if the compliment stops at the door. You hear it, but it does not quite get in."
      },
      {
        "text": "[Quietly] Sunday night I start feeling low when the apartment gets quiet, but I mostly just scroll.",
        "suggestion": "The week arrives early in the room, and scrolling becomes a small moving light against the heaviness."
      },
      {
        "text": "[Quiet and ashamed] I rewrite simple messages over and over, then sometimes don't send them.",
        "suggestion": "One small message becomes a narrow doorway, and every rewrite is another step back from being seen."
      },
      {
        "text": "[Anxious] Even saying hello in the hallway can sound wrong to me afterward.",
        "suggestion": "That tiny hello keeps ringing in your ears, as if one ordinary word has become evidence against you."
      },
      {
        "text": "[Quietly] In groups, I keep track of where the exit is before I join the conversation.",
        "suggestion": "The exit becomes the safest part of the room, the place your eyes hold onto when attention feels too close."
      },
      {
        "text": "[Flat] Everyone in the group chat seemed to know what to say. I wrote a reply, looked at it, and didn't send it.",
        "suggestion": "The conversation keeps moving, and you're waiting at its edge with words you can't quite let out."
      },
      {
        "text": "[Matter-of-fact] I replayed the greeting all evening. It lasted about five seconds. It's annoying that I can't leave it alone.",
        "suggestion": "Those five seconds keep circling back, like a tiny clip you can't stop playing."
      }
    ],
    "case-laura": [
      {
        "text": "[Flat and guarded] Most mornings I get up, make coffee, answer the messages I have to answer, and notice I still do not feel much.",
        "suggestion": "It sounds like the day is running in grey: everything keeps moving, but very little reaches you."
      },
      {
        "text": "[Distant] If a door slams at work, I know it is just a door, but for a minute I cannot keep track of what people are saying.",
        "suggestion": "The sound gets there before reason does, an old alarm taking over the room while the conversation moves away from you."
      },
      {
        "text": "[Betrayed] I found out he had been seeing someone else, and now when he is kind I mostly think, don't be stupid again.",
        "suggestion": "His kindness reaches a place that has already pulled the shutters closed, trying not to be fooled twice."
      },
      {
        "text": "[Ashamed] My daughter sent pictures from a trip and I could see it was lovely, but I mostly felt blank and then guilty for that.",
        "suggestion": "The picture shows life and closeness, and inside it is like a window you can look through without being able to step into it."
      },
      {
        "text": "[Distant] Wine helps me turn things off at night. I pour it before I have decided what I am trying not to think about.",
        "suggestion": "The glass becomes the dimmer switch, lowering the room inside you before anything sharp can fully arrive."
      },
      {
        "text": "[Slow and flat] I lie awake listening for sounds in the hallway, and I tell myself there is nothing to listen for.",
        "suggestion": "It is as though you lie down, but something in you stays on watch, listening for the next sound."
      },
      {
        "text": "[Tense and tearful] Sometimes a song comes on and my eyes fill up, so I change it before I can really tell what it is about.",
        "suggestion": "The music opens a small crack in the numbness, and you turn away before the feeling has room to come through."
      },
      {
        "text": "[Hopeless] When my ex starts explaining why he left, I stop trying to answer and just wait for it to be over.",
        "suggestion": "Under his explanations, you fold inward and go quiet, the fight draining out until answering feels useless."
      },
      {
        "text": "[Tense and guarded] When someone says something kind to me, I usually correct it in my head or wait for the catch.",
        "suggestion": "The kindness touches a locked door, and behind it something tightens before the words can be received."
      },
      {
        "text": "[Flat and guarded] I keep a bag packed by the door. I know it sounds dramatic, but I sleep better knowing it is there.",
        "suggestion": "The bag sits there as a quiet exit, helping the part of you that never fully trusts the house to stay settled."
      },
      {
        "text": "[Flat] I packed his last things. Afterwards the flat was tidy, and I didn't know what to do with myself.",
        "suggestion": "Everything is in its place now, but you are left standing in a space that doesn't yet feel like yours."
      },
      {
        "text": "[Guarded] My friend was kind. I said thank you. I didn't really let it affect me until she'd gone.",
        "suggestion": "Perhaps the kindness only reaches you once the door is closed and you no longer have to guard the opening."
      }
    ],
    "case-carlos": [
      {
        "text": "[Defensive] When someone smirks at me on the crew, I get tense fast and spend the next hour making sure nobody thinks I let it slide.",
        "suggestion": "That smirk seems to hit like a spark, and suddenly the next hour is spent making sure everyone knows you will not be pushed around."
      },
      {
        "text": "[Macho] My father used to say only weak men talk about feelings, and I still hear that when people ask what is going on with me.",
        "suggestion": "His voice still stands in the room like a command, keeping the softer places locked up before anyone can see them."
      },
      {
        "text": "[Tense and angry] I pace around the kitchen after fights because if I sit still, I start thinking about what she said and get more worked up.",
        "suggestion": "You wear a track into the kitchen floor, trying to push the charge down through your feet before it bursts out."
      },
      {
        "text": "[Ashamed] I keep remembering the look on my son's face after I yelled, but then I tell myself every father loses it sometimes.",
        "suggestion": "His face stays there under the excuses, a small bruise of shame you keep trying to cover with reasons."
      },
      {
        "text": "[Defensive] When my wife says I drink too much, I start listing everything I do for this family so she will drop it.",
        "suggestion": "Her words land like an accusation, and the list of what you provide becomes armor against feeling judged."
      },
      {
        "text": "[Ashamed] After I blow up, everyone gets quiet, and I usually make some comment so we can move on.",
        "suggestion": "After the outburst, it is as if everyone holds their breath, and your comment rushes into that silence."
      },
      {
        "text": "[Angry, tightly controlled] I get so angry that I stop talking, because if I keep going I do not trust what I will say.",
        "suggestion": "The words are clamped behind your teeth, all that heat held in because one more sentence could break loose."
      },
      {
        "text": "[Worthless] If I back down in front of my son, I feel like I have taught him not to respect me.",
        "suggestion": "Backing down feels like shrinking in his eyes, as if your outline as a father fades right there in front of him."
      },
      {
        "text": "[Tense and angry] In the car after a fight, I grip the wheel and tell myself not to react until I get home.",
        "suggestion": "Your hands become the brakes on the whole reaction, holding the heat in place until the drive is over."
      },
      {
        "text": "[Worried] I worry my son is learning to check my mood before he decides whether it is safe to talk.",
        "suggestion": "That worry hits hard, the thought that your anger could become the weather he checks before stepping close."
      },
      {
        "text": "[Clipped] He made the comment in front of the crew. I finished the job. I was still thinking about it at home.",
        "suggestion": "You carried on working, but that public sting kept travelling with you long after the shift ended."
      },
      {
        "text": "[Controlled] My daughter watches before she speaks to me. I notice it. I don't like what that says about things at home.",
        "suggestion": "There's a pause between you now, as if she has to test the ground before taking a step towards you."
      }
    ],
    "case-nina": [
      {
        "text": "[Tired] The second I sit down, I remember three things I have not done and get back up.",
        "suggestion": "It is as if you have barely settled into the chair before a bell rings inside: there is more to do."
      },
      {
        "text": "[Hurt] Sometimes I feel used, and then I immediately think of all the reasons I should be more grateful.",
        "suggestion": "The hurt rises for a second, and then gratitude is pulled over it like a blanket before anyone can see."
      },
      {
        "text": "[Worthless] When I need help, I feel embarrassed, like I have failed at the basic things everyone else handles.",
        "suggestion": "Needing help makes you shrink, as if one request could lower your whole worth in the room."
      },
      {
        "text": "[Tired] I smile and keep going because if I stop, people ask if something is wrong and then I have to manage that too.",
        "suggestion": "The smile becomes another job, stretched across the tiredness so no one has to look too closely."
      },
      {
        "text": "[Apologetic] By evening I am so tired I can barely answer my son, and then I apologize because he did not ask for a tired mother.",
        "suggestion": "The tiredness is heavy in your voice, and even that becomes something you feel you have to make up for."
      },
      {
        "text": "[Torn] Saying no makes me panic, even about small things, because I start picturing the other person deciding I am selfish.",
        "suggestion": "It is as if that small no could pull a thread loose between you, and suddenly the whole connection feels at risk."
      },
      {
        "text": "[Tired] I clean late at night even when I am exhausted, because waking up to a messy kitchen ruins the whole morning.",
        "suggestion": "The counter gets wiped again, a midnight attempt to make tomorrow safe before you are allowed to stop."
      },
      {
        "text": "[Guilty] If the house is messy, I feel ashamed before anyone says anything, and I start explaining what got in the way.",
        "suggestion": "Shame arrives before any criticism, and the explanations stack up in front of you like a shield."
      },
      {
        "text": "[Tearful] I cry in the kitchen where no one will notice, then splash my face and go back out.",
        "suggestion": "The tears get hidden among ordinary kitchen sounds, washed away quickly so the household does not have to pause."
      },
      {
        "text": "[Lonely] I still wait for my ex to notice how tired I am, even though he does not live here anymore and probably never noticed.",
        "suggestion": "Some part of you is still watching for him to look up, waiting for the old life to finally see how much you carried."
      },
      {
        "text": "[Matter-of-fact] I spent the afternoon finding things everyone else wanted. When they asked what I wanted, I couldn't think of anything.",
        "suggestion": "You've made so much room for everyone else's wishes that your own seem tucked away where you can barely reach them."
      },
      {
        "text": "[Smiling, detached] They said I always keep things going. It was meant as a compliment. I felt tired hearing it.",
        "suggestion": "The compliment lands almost like another load placed in the arms already carrying everything."
      }
    ],
    "case-aisha": [
      {
        "text": "[Distrustful] You say your notes are private, but if you write that I am unstable, I will not know until it is already out there.",
        "suggestion": "It is as if the words on that page could travel somewhere you cannot follow, leaving you with no say in how you are seen."
      },
      {
        "text": "[Desperate] I can beg someone to stay and then tell them to leave me alone in the same conversation, and I mean both at the time.",
        "suggestion": "The feeling swings from reaching for their sleeve to shoving the door closed, both moves trying to survive the same fear."
      },
      {
        "text": "[Confused] I cannot tell if I am angry, scared, or empty; by the time I choose one word, it has already changed.",
        "suggestion": "It is all tangled and moving at once, like trying to open one door while the hallway keeps rearranging around you."
      },
      {
        "text": "[Panicked] I scratch my arm when I start feeling unreal, because looking around the room and naming objects does not always bring me back.",
        "suggestion": "The scratching becomes an urgent way to feel real again, a sharp signal when the room starts drifting away."
      },
      {
        "text": "[Panicked] When the typing dots disappear, I check the message again and again, even if I know they probably just got busy.",
        "suggestion": "Those vanishing dots pull the thread of contact out of your hands, and suddenly the whole connection feels suspended."
      },
      {
        "text": "[Desperate] When someone says goodbye, I know it is normal, but I start bargaining in my head about how to keep them there longer.",
        "suggestion": "It sounds like goodbye starts closing a door, and you are already reaching to hold it open a little longer."
      },
      {
        "text": "[In denial] Last week I felt suicidal when he disappeared, but then he texted me back, so maybe I am fine now and we do not need to make it a big thing.",
        "suggestion": "His message may have felt like a lifeline after that frightening week. I do not want to assume the suicidal thoughts are gone because he replied. Are you having thoughts of ending your life now?"
      },
      {
        "text": "[Hurt] When someone calls me too much, I keep hearing it afterward, especially when I want to text them and try not to.",
        "suggestion": "Too much lands like a stamp across you, bright and hard to wash off, exactly where the wish for contact lives."
      },
      {
        "text": "[Tearful] When someone is gentle with me, I cry before I understand why, and then I get embarrassed and want them to stop being nice.",
        "suggestion": "Gentleness gets through before you can brace, tears rush up, and then shame tries to push the kindness back out."
      },
      {
        "text": "[Panicked] I keep checking the door while we talk, because part of me expects you to stand up and leave if I say too much.",
        "suggestion": "Your eyes keep guarding the doorway, watching for the moment I might vanish because the need became too visible."
      },
      {
        "text": "[Flat, deliberate] I delete the conversation so I won't check it. Then I open the empty screen. I do that too.",
        "suggestion": "Even when the messages are gone, it's as though you're still waiting at the same door for someone to come back."
      },
      {
        "text": "[Guarded] Things are fine today. I don't want to get used to it. That's usually when something changes.",
        "suggestion": "You can feel the calm nearby, but you keep one hand on the alarm in case it disappears."
      }
    ],
    "case-david": [
      {
        "text": "[Controlled] When my wife calls me cold, I get quiet and then make one precise comment that I know will land hard.",
        "suggestion": "It sounds as though \"cold\" lands like a blow, and your words strike back."
      },
      {
        "text": "[Worthless] If I am not the best person in the room, I feel ordinary, and ordinary is almost worse than failing.",
        "suggestion": "The floor opens under ordinary, and you drop from impressive to nothing before anyone else has even judged you."
      },
      {
        "text": "[Defensive] When I feel small, I start talking about what I have achieved, even if the conversation had nothing to do with work.",
        "suggestion": "The achievements rush in like a taller version of you, surrounding the small, stung place before it can be seen."
      },
      {
        "text": "[Controlled] When I feel cornered, I fix my shirt, slow my voice, and start explaining my record so the room remembers who I am.",
        "suggestion": "The shirt, the voice, and the record become armor pieces fastened one by one before the hit can land."
      },
      {
        "text": "[Ashamed] No matter how much I achieve, I still think there is something wrong with me, and I hate that success has not fixed it.",
        "suggestion": "Each success adds another polished layer, while underneath there is a stain you fear achievement can never cover."
      },
      {
        "text": "[Ashamed] My kid's face after I snap bothers me more than I expected, but I still catch myself preparing a defense.",
        "suggestion": "It is as if your child's face stays there between you and every argument you reach for."
      },
      {
        "text": "[Avoidant] In hard talks, I check my phone when it gets too personal, and I tell myself I am just staying on top of things.",
        "suggestion": "The phone becomes a trapdoor under the table, a clean exit before the feeling can corner you."
      },
      {
        "text": "[Dismissive] Saying I was wrong feels humiliating, even when part of me knows I caused the damage.",
        "suggestion": "Those words strip the armor in an instant, leaving your face hot and exposed in front of the damage."
      },
      {
        "text": "[Confused] I do not know what I feel; I just know I cannot settle when everyone goes quiet after I have spoken.",
        "suggestion": "The quiet turns into a hallway of closed doors, and you pace there without knowing which one holds the feeling."
      },
      {
        "text": "[Controlled] Since the affair came out, home feels different; people still use the same rooms, but I do not know where I stand.",
        "suggestion": "The house still has the same rooms, but the warmth has leaked out, leaving you standing without a clear place."
      },
      {
        "text": "[Coolly] The dinner was a success. Everyone praised the house. Once they left, it felt remarkably empty. That's not a complaint, just an observation.",
        "suggestion": "The applause leaves with the guests, and you're standing in the quiet it no longer fills."
      },
      {
        "text": "[Controlled] I've rewritten the email several times. There is nothing wrong with it now. Sending it still seems to give them too much opportunity to judge me.",
        "suggestion": "You keep polishing the surface, but sending it still feels like stepping out without any cover."
      }
    ],
    "case-marcus": [
      {
        "text": "[Hopeless] Most days I go through the motions, show up where I am supposed to, and still do not see the point of talking about it.",
        "suggestion": "It sounds like moving through a day with all the colour washed out, and talking feels like more effort with nowhere to go."
      },
      {
        "text": "[Low voice] Crowds make me tense before anything has happened; I track exits, hands, and noise while everyone else is just shopping.",
        "suggestion": "The crowd reaches you as threat before it reaches you as people, and your whole system takes up its post."
      },
      {
        "text": "[Macho] In the unit, feelings got people killed, so I learned not to have them, and I still do not know what good they are supposed to do.",
        "suggestion": "That rule still sounds like an order in your chest: feelings get people killed, so the heart gets locked behind a door."
      },
      {
        "text": "[Hypervigilant] Nightmares wake me up, and then the room does not feel normal for a while; I check the corners even though I know where I am.",
        "suggestion": "Sleep throws you back into a charged room, as if danger followed you out and waited in the corners."
      },
      {
        "text": "[Low voice] When the apartment is quiet, I feel worse, but I usually stay there because calling someone would be harder.",
        "suggestion": "The quiet presses in until even the air feels crowded, and staying alone becomes the familiar kind of endurance."
      },
      {
        "text": "[Quiet and guarded] When something good happens, I notice it, say the right thing, and then wait for the feeling that does not come.",
        "suggestion": "It is as if something good is right in front of you, but there is a pane of glass between you and the feeling."
      },
      {
        "text": "[Flat] I keep the lights low at home because bright light bothers me and makes the place feel too exposed.",
        "suggestion": "The dim light softens the edges, keeping the room from coming at you too clearly all at once."
      },
      {
        "text": "[Low voice] If someone knocks unexpectedly, I get thrown off fast, even if it turns out to be a neighbor with the wrong apartment.",
        "suggestion": "The knock turns the door into danger for a moment, and your whole system starts hammering before a name appears."
      },
      {
        "text": "[Confused] When I try to talk about it, I do not know what feeling is supposed to come first, so I usually stop talking.",
        "suggestion": "Every feeling crowds the same doorway, and none is clear enough to step through before the door closes again."
      },
      {
        "text": "[Flat] Some nights I sit in the car before going upstairs, because once I open the apartment door there is nothing to do but be there.",
        "suggestion": "The quiet car becomes a last small shelter before the empty apartment has to be entered."
      },
      {
        "text": "[Flat] I leave the television on. Not watching it. It's worse when the room is quiet.",
        "suggestion": "The sound seems to keep a little distance between you and what the silence brings close."
      },
      {
        "text": "[Guarded] I recognised the handwriting on the envelope. Put it in a drawer. Haven't opened it. Don't want it in sight either.",
        "suggestion": "That familiar writing seems to bring something close enough that you need a drawer between you and it."
      }
    ]
  },
  "empathic-conjectures": {
    "case-sara": [
      {
        "text": "[Embarrassed] I tell my friends I'm fine, then get irritated when they stop asking.",
        "suggestion": "You say you are fine, then feel upset when they stop asking. I wonder if you wish someone would notice that there is more you have not said."
      },
      {
        "text": "[Embarrassed] I stay late at work after the breakup, because getting home early feels worse.",
        "suggestion": "Staying late keeps you away from the quiet apartment; maybe going home early brings the aloneness closer."
      },
      {
        "text": "[Embarrassed] I call myself dramatic when I still cry about it, even though I only do it alone.",
        "suggestion": "Calling yourself dramatic turns the tears into something to hide; I wonder if there is shame about still needing to grieve."
      },
      {
        "text": "[Softly] When someone asks how I'm doing, I smile and change the subject.",
        "suggestion": "You move away quickly with the smile; I wonder if being honestly seen feels both wanted and too exposed."
      },
      {
        "text": "[Embarrassed] When couples post anniversary photos, I roll my eyes and scroll past too fast.",
        "suggestion": "The eye roll helps you get past it quickly; maybe underneath it there is an ache for that kind of closeness."
      },
      {
        "text": "[Tearful] I unfollowed him, then borrowed my friend's phone to check if he looked happier.",
        "suggestion": "You are trying to stop looking and still need to know; I wonder if part of you is afraid he is relieved you are gone."
      },
      {
        "text": "[Softly] I tell myself other people have real problems, so I should be grateful.",
        "suggestion": "You make your pain smaller before anyone else can; I guess you may be protecting yourself from being dismissed."
      },
      {
        "text": "[Embarrassed] I drafted an apology to him three times this week, even though I do not know what I did wrong.",
        "suggestion": "The apology gives you something concrete to fix; I wonder if finding fault in yourself feels less helpless than not knowing why he left."
      },
      {
        "text": "[Tearful] Nights are the worst; I replay little moments until I find something I could have done differently.",
        "suggestion": "The replay keeps looking for a handle; maybe blaming yourself gives you a way to feel less powerless with the loss."
      },
      {
        "text": "[Softly] When you're kind, I look down and want to change the topic.",
        "suggestion": "Kindness seems hard to take in directly; maybe it touches a longing you are afraid to show."
      },
      {
        "text": "[Dismissive, then quiet] He can keep the photos. I don't need them. I did look to see whether he'd taken ours down, though.",
        "suggestion": "I wonder if seeing whether the photos are still there is also a way of checking whether you still matter to him."
      },
      {
        "text": "[Apologetic] I nearly asked my sister to stay another night. Then I thought she'd already done enough, so I made it sound as though I wanted the flat to myself.",
        "suggestion": "Maybe it felt risky to let her see you still wanted company, in case that was more than she wanted to give."
      }
    ],
    "case-michael": [
      {
        "text": "[Firm] If someone questions me in a meeting, I answer fast and louder than I meant to.",
        "suggestion": "You answer quickly and loudly when someone questions you. I wonder if there is a moment of feeling exposed before you respond."
      },
      {
        "text": "[Defensive] When a coworker corrects me in front of the room, I laugh it off and then feel heat shoot up my neck.",
        "suggestion": "The laugh covers it fast; I wonder if there is a quick flash of humiliation underneath."
      },
      {
        "text": "[Tense] My wife says I am harsh, and I tell her I am just being honest.",
        "suggestion": "Honesty is the safer position to stand behind; I wonder if softening would bring you closer to guilt."
      },
      {
        "text": "[Firm] I keep favors even. I do not like owing anyone.",
        "suggestion": "You keep the balance carefully; I wonder if owing someone feels like being one-down."
      },
      {
        "text": "[Tense and ashamed] When I have to apologize, my jaw tightens and I start explaining the whole situation.",
        "suggestion": "The explanation comes in quickly; I wonder if apologizing touches shame, almost like losing ground."
      },
      {
        "text": "[Tense] I only pour a drink after work because my wife keeps pushing; if she would stop nagging, I would not need it.",
        "suggestion": "You connect the drinking to feeling pushed by your wife. I wonder if being blamed feels hard to bear, and the drink gives you some distance from that."
      },
      {
        "text": "[Firm] I reread everyone's work before a presentation because one mistake would come back on me.",
        "suggestion": "You are guarding against one mistake landing on you; I wonder if blame feels expected before anything has gone wrong."
      },
      {
        "text": "[Ashamed] After I blow up, my kid looks careful around me, and I cannot meet his eyes.",
        "suggestion": "His careful look seems to hit hard; I wonder if it touches shame about being scary to him."
      },
      {
        "text": "[Tense] When someone tells me to calm down, it sounds like they are calling me childish.",
        "suggestion": "That phrase seems to shrink you quickly; I wonder if the anger protects against feeling dismissed."
      },
      {
        "text": "[Firm] I do not do feelings; I ask what we are going to do about it.",
        "suggestion": "You move toward action fast; maybe feelings seem too exposing to stay with for long."
      },
      {
        "text": "[Clipped] I could have asked for help with the report. Instead I worked until midnight. I don't want people thinking they have to carry me.",
        "suggestion": "I wonder if needing help feels close to being seen as not capable enough."
      },
      {
        "text": "[Irritated, voice dropping] My son kept asking whether I'd come to his game. I told him I'd already said yes. I've been thinking about his face since then.",
        "suggestion": "Maybe his asking again hurt because it suggested he wasn't sure he could count on you."
      }
    ],
    "case-jason": [
      {
        "text": "[Blank] I rehearse every sentence before a meeting, and then my mind still blanks when people turn toward me.",
        "suggestion": "You prepare carefully, and then the blankness takes over; I wonder if being looked at feels like being evaluated."
      },
      {
        "text": "[Hesitant] When I get invited out, I say I am busy before I can find out whether I want to go.",
        "suggestion": "The busy answer comes in fast; I wonder if it protects you from finding out whether you would belong."
      },
      {
        "text": "[Anxious] I hear a voice saying 'don't embarrass yourself' before I even open my mouth.",
        "suggestion": "That warning arrives before you speak; I guess it is trying to protect you from feeling exposed."
      },
      {
        "text": "[Quietly] After I speak, I cringe for hours and imagine everyone replaying how ridiculous I sounded.",
        "suggestion": "The cringe keeps replaying the moment; I wonder if being heard feels close to being laughed at."
      },
      {
        "text": "[Hesitant] When someone compliments me, I assume they are being polite and missed the awkward part.",
        "suggestion": "The compliment does not quite get in; I wonder if the awkward part feels more believable than the kind words."
      },
      {
        "text": "[Ashamed] Seeing confident people makes me want to disappear, and then I hate myself for envying them.",
        "suggestion": "Seeing their confidence makes you want to disappear. I wonder if there is sadness in the envy too, about wanting to feel that free with people."
      },
      {
        "text": "[Quietly] If someone laughs nearby, I assume it is about me and replay what I did wrong.",
        "suggestion": "You brace for ridicule quickly; I wonder if laughter feels like proof that being visible is dangerous."
      },
      {
        "text": "[Anxious] I type a text, read it five times, and delete it before sending.",
        "suggestion": "You edit yourself right out of contact; I wonder if reaching out feels like giving someone a chance to reject you."
      },
      {
        "text": "[Anxious] I drink before events because otherwise I stand by the wall checking my phone.",
        "suggestion": "The drink helps you leave the wall; I wonder if it shields you from feeling exposed."
      },
      {
        "text": "[Ashamed] I stay quiet even when I have a good idea, and then replay it all day.",
        "suggestion": "You stay hidden and then keep replaying it; maybe speaking up feels risky, but staying silent brings shame."
      },
      {
        "text": "[Hesitant] I tell people I'm busy when they invite me. Then I check whether they went without me. I know that doesn't make much sense.",
        "suggestion": "Maybe you want to be included, and saying you're busy protects you from finding out what it would be like to join them."
      },
      {
        "text": "[Quiet] I didn't tell my friend I'd had a bad day. I asked about his instead. I kept hoping he'd notice I wasn't saying much.",
        "suggestion": "I wonder if you wanted him to notice you needed care without having to risk asking for it."
      }
    ],
    "case-laura": [
      {
        "text": "[Flat and guarded] When someone is kind, I get suspicious fast, like warmth always has a catch.",
        "suggestion": "You distance from kindness; I wonder if closeness can stir an old fear that warmth will turn into danger or betrayal."
      },
      {
        "text": "[Fearful] When voices rise, I freeze before I know whether the anger is even aimed at me.",
        "suggestion": "The freeze arrives before the facts; maybe some part of you learned that fear had to move faster than thought."
      },
      {
        "text": "[Slow and flat] Part of me feels guilty that I seem numb when people expect me to be grateful.",
        "suggestion": "You judge the numbness; I guess it may be protecting a very sore grief that gratitude cannot reach."
      },
      {
        "text": "[Flat and guarded] I avoid movies with family fights because the sound follows me home.",
        "suggestion": "You steer clear; I wonder if the sound might wake old terror and shame that do not stay on the screen."
      },
      {
        "text": "[Slow and flat] Sometimes I stare at the wall until the room goes flat and nothing can reach me.",
        "suggestion": "The flatness seems protective; I wonder if it keeps you away from the ache that might come if the room felt real."
      },
      {
        "text": "[Tense and guarded] A kind man asked me out, and I immediately listed every reason he would probably hurt me.",
        "suggestion": "The list comes in fast; I wonder if wanting closeness and expecting betrayal arrive almost together."
      },
      {
        "text": "[Ashamed] When someone touches my shoulder, I flinch before I know them, then feel ashamed.",
        "suggestion": "The flinch comes before recognition; I wonder if touch may carry danger so quickly, and then shame comes for needing that protection."
      },
      {
        "text": "[Distant] When people say trauma survivors are strong, I want to leave the room.",
        "suggestion": "That praise pushes you away; I wonder if it misses the shame and aloneness that still feel hard to reach."
      },
      {
        "text": "[Slow and flat] My routine is work, groceries, home. It feels safer that way.",
        "suggestion": "You keep the world narrow and predictable; I wonder if smallness helps control risk and keep old pain from getting too close."
      },
      {
        "text": "[Tense and ashamed] If I cry, I apologize before anyone even reacts.",
        "suggestion": "The apology comes before anyone has done anything; I wonder if tears carry an old expectation of danger, blame, or care that was not safe."
      },
      {
        "text": "[Guarded] When my friend offers to come over, I say I'm working. I wasn't working last night. I did keep looking at my phone.",
        "suggestion": "Maybe keeping her outside protects you, while another part of you still hopes she will make contact."
      },
      {
        "text": "[Flat, looking away] I don't mind that he returned the key. That's settled. I haven't taken his name out of my contacts yet, though.",
        "suggestion": "I wonder if removing his name would make the ending feel more final than you're ready for right now."
      }
    ],
    "case-carlos": [
      {
        "text": "[Tense and angry] A disrespectful tone flips a switch in me before I know what got hit.",
        "suggestion": "The anger comes so fast. I wonder if there is a brief feeling of being humiliated just before it."
      },
      {
        "text": "[Tense and angry] If I back down, it sits in my chest for days.",
        "suggestion": "It stays with you for days; I wonder if backing down might touch something more than the argument, like feeling small or taken over."
      },
      {
        "text": "[Tense and angry] When someone tells me what to do, my first thought is, 'Who do you think you are?'",
        "suggestion": "That question comes up fast; I guess being directed can feel like being put underneath someone else's power."
      },
      {
        "text": "[Ashamed] My son saw me slam a door, and later I could not stop seeing his face.",
        "suggestion": "I wonder if his face brought up not just regret, but shame and fear about what he is learning from you."
      },
      {
        "text": "[Tense] After a fight, my wife gets quiet, and I cannot look at her face.",
        "suggestion": "Her quiet seems to reach past the anger; I wonder if looking at her would bring up regret, tenderness, and the fear that you scared her."
      },
      {
        "text": "[Tense and angry] I puff up when someone challenges me, before they can see it lands.",
        "suggestion": "You react strongly before they can see the challenge has landed. I wonder if there is a moment of feeling small that you do not want them to see."
      },
      {
        "text": "[Ashamed] I break things so I do not hit people, but afterward I can see everyone is still scared.",
        "suggestion": "You are trying not to hit people; I wonder if breaking things pushes hurt away for a moment, then leaves shame when you see the fear."
      },
      {
        "text": "[Defensive] My father used to say feelings make men weak, and I still hear that in my head.",
        "suggestion": "That rule is still loud; I wonder if it is guarding against the risk of feeling tender, exposed, or powerless."
      },
      {
        "text": "[Tense and angry] I replay disrespect for days, planning how I should have won it in the moment.",
        "suggestion": "You keep trying to win it afterward; I wonder if the replay helps hold back the humiliation of feeling small right then."
      },
      {
        "text": "[Fearful] I want to do better for my family, and then I hear myself sounding like the men I hated.",
        "suggestion": "I wonder if under the determination there is fear and grief about becoming someone your family has to brace around."
      },
      {
        "text": "[Defensive] The crew can joke about me. I joke about them. But when the new lad joined in, I had to put him straight.",
        "suggestion": "Could there be a worry that letting his joke pass would mean losing respect in front of the others?"
      },
      {
        "text": "[Tense, then quiet] My daughter asked her uncle to help instead of me. I said fine. Then I found a reason to go out before he arrived.",
        "suggestion": "Maybe it hurt to see her turn to someone else, and leaving kept you from having to show that hurt."
      }
    ],
    "case-nina": [
      {
        "text": "[Guilty] Resting makes me feel selfish, even when I am so tired I can barely stand.",
        "suggestion": "Rest brings guilt even when you can barely stand. I wonder if you fear you will matter less to people when you are not doing things for them."
      },
      {
        "text": "[Apologetic] I say yes and then resent it, but I still cannot stop.",
        "suggestion": "You say yes and anger follows; maybe the resentment is pointing to needs that still feel too risky to claim."
      },
      {
        "text": "[Torn] When I ask for help, I apologize before they can look annoyed.",
        "suggestion": "You apologize before anyone reacts; I guess there is a fear that needing help will cost you acceptance."
      },
      {
        "text": "[Guilty] If the house is messy when people stop by, I start explaining before they say anything.",
        "suggestion": "You explain before there is even a charge; I wonder if the mess might touch shame about having to prove you are good through doing."
      },
      {
        "text": "[Apologetic] If someone seems disappointed, I start fixing things before I know what I want.",
        "suggestion": "The fixing comes in fast; I wonder if disappointment might touch an old fear that love could be withdrawn."
      },
      {
        "text": "[Torn] I swallow my anger because it is not nice, and then I resent everyone quietly.",
        "suggestion": "You keep the anger to yourself so you can stay nice. I wonder if you worry that people might pull away if they knew what you wanted."
      },
      {
        "text": "[Tired] I take care of everyone, and when nobody notices, I get sharp with myself for caring.",
        "suggestion": "You turn on the wish quickly; I wonder if there is a lonely longing to be cared for without having to earn it."
      },
      {
        "text": "[Apologetic] I try to say no and then add three explanations before they answer.",
        "suggestion": "The explanations rush in after the no; I wonder if a part of you is trying to keep acceptance safe."
      },
      {
        "text": "[Torn] I tell myself others have it worse, and then I keep going.",
        "suggestion": "You make your needs smaller and move on; I wonder if staying acceptable has meant not taking up much room."
      },
      {
        "text": "[Tired] If I slow down after everyone is asleep, a lump rises in my throat.",
        "suggestion": "The lump comes when no one needs you; maybe grief is close and asking to be noticed."
      },
      {
        "text": "[Smiling] They said I didn't need to bring anything. I cooked anyway. Arriving empty-handed would have felt strange.",
        "suggestion": "I wonder if bringing something helps you feel sure there's a place for you there."
      },
      {
        "text": "[Apologetic] I tell everyone I'm happy to organise it. Then I get cross when nobody offers to help. They can't read my mind, so I suppose it's my fault.",
        "suggestion": "Maybe asking directly feels risky, as if needing help could change how they see you."
      }
    ],
    "case-aisha": [
      {
        "text": "[Desperate] If you glance at the clock, my stomach drops like you are already leaving me.",
        "suggestion": "That glance becomes a leaving signal; I wonder if underneath the drop is a fear that you stop mattering once someone turns away."
      },
      {
        "text": "[Furious] When he did not text back, I went from quiet to furious before I knew what happened.",
        "suggestion": "You swing fast; maybe the fury rushes in to protect the scared, raw part that feels left."
      },
      {
        "text": "[Numb] Sometimes I want to scratch my arms just to cut through the numbness.",
        "suggestion": "You want a way through the numbness; I wonder if there is unbearable emptiness underneath."
      },
      {
        "text": "[Desperate] I scared everyone last week saying I might kill myself, but he texted today, so it is fine and maybe I do not need to talk about it.",
        "suggestion": "Part of you wants to close it quickly now that contact came back; I wonder if looking back at how close the edge got feels frightening."
      },
      {
        "text": "[Desperate] If you cancel, a part of me wants to never come back and pretend I do not care.",
        "suggestion": "That cancellation stings like being dropped; I wonder if rejecting first feels safer than waiting for it to happen again."
      },
      {
        "text": "[Ashamed] When I ask someone to stay, I hate how intense I sound afterward.",
        "suggestion": "You hate the intensity right where you need closeness; maybe shame says your need is too much."
      },
      {
        "text": "[Panicked] Kindness makes me sob, and then I want to bolt from the room.",
        "suggestion": "It lands big; I guess one part longs for the kindness and another expects needing it to become dangerous."
      },
      {
        "text": "[Ashamed] I test people to find out if they really care, then hate how needy it sounds.",
        "suggestion": "You test and then feel ashamed; I wonder if you are trying to prove you matter before risking trust."
      },
      {
        "text": "[Ashamed] After I lash out, I call myself disgusting before anyone else can say it.",
        "suggestion": "The attack turns inward quickly; I wonder if calling yourself disgusting gets there before the fear that someone else will."
      },
      {
        "text": "[Panicked] I panic when I say goodbye, even when I know you'll be back.",
        "suggestion": "Goodbyes spike panic even when your mind knows better; I wonder if they touch that old fear that no one comes back."
      },
      {
        "text": "[Sharp, then watching] Don't bother saying you'll remember me next week. You'll say it because you have to. I keep wondering whether you've thought about me between sessions, though.",
        "suggestion": "I wonder if wanting to matter to me between sessions also makes you wary of an answer that might disappoint you."
      },
      {
        "text": "[Defiant, voice unsteady] I said I didn't need the friendship anymore. Deleted her number. I still know it by heart, so that didn't really do anything.",
        "suggestion": "Maybe saying you didn't need her was a way to get ahead of the fear that she might not need you."
      }
    ],
    "case-david": [
      {
        "text": "[Hopeless] When my wife calls me cold, I make a cutting joke before she can see it hurt.",
        "suggestion": "The joke comes before she can see the hurt. I wonder if being called cold also touches a fear that you are failing her."
      },
      {
        "text": "[Dismissive] I do not like being told what to do; it makes me feel like someone has the upper hand.",
        "suggestion": "You resist direction; I wonder if it lands like someone has made you small."
      },
      {
        "text": "[Dismissive] If I cannot be the best, why bother trying at all?",
        "suggestion": "You aim for the top; I wonder if ordinary can feel almost like disappearing."
      },
      {
        "text": "[Distant] I plan big gestures, people react well, and then I feel empty afterward.",
        "suggestion": "I wonder if after the gesture lands, a lonely place still asks whether they want you or only what you can provide."
      },
      {
        "text": "[Dismissive] Apologizing makes me cringe; I start explaining before the words are even out.",
        "suggestion": "It feels humiliating; I wonder if admitting wrong might touch an old shame of being reduced to failure."
      },
      {
        "text": "[Avoidant] In hard talks, I reach for my phone when the conversation starts to get personal.",
        "suggestion": "You turn to your phone when things get personal. I wonder if you feel exposed and expect to be judged if you stay in the conversation."
      },
      {
        "text": "[Controlled] I brag when I feel insecure, before anyone can see the gap.",
        "suggestion": "You pump yourself up quickly; I guess it covers the fragile gap before anyone else can see it."
      },
      {
        "text": "[Wounded but sharp] If the kids push back, I hear disrespect and go straight into lecture mode.",
        "suggestion": "Their pushback seems to hit your authority fast; I wonder if the lecture covers a flash of shame."
      },
      {
        "text": "[Wounded but sharp] When my wife misunderstands me, I get sharp and keep proving my point.",
        "suggestion": "You keep proving the point; I wonder if beneath the anger there is grief about not being known."
      },
      {
        "text": "[Controlled] If my wife stays, I feel trapped and criticized; if she leaves, I feel humiliated. There is no winning.",
        "suggestion": "Both options threaten you; I wonder if each one touches the same fear of being seen as not enough."
      },
      {
        "text": "[Coolly] I didn't attend the farewell dinner. It wasn't important. I did notice that nobody contacted me afterwards to ask why.",
        "suggestion": "I wonder if not being asked touched a wish to be missed, even while you were telling yourself the dinner didn't matter."
      },
      {
        "text": "[Controlled] I don't need my wife's approval. But when she thanks the neighbour for helping, I find myself listing everything I've done that week.",
        "suggestion": "Perhaps her thanks to him stir a fear that what you offer is no longer enough to matter to her."
      }
    ],
    "case-marcus": [
      {
        "text": "[Slow and flat] Most days I feel shut down. People talk, and I mostly just nod.",
        "suggestion": "You feel sealed off; I wonder if numbness may be keeping a lot of pain from getting through all at once."
      },
      {
        "text": "[Low voice] I sleep with the TV on so the room does not get too quiet.",
        "suggestion": "You drown out the quiet; maybe silence brings memories and grief too close."
      },
      {
        "text": "[Quiet and guarded] I pick the seat where I can see the door, and I get tense if someone stands behind me.",
        "suggestion": "The seat choice seems to organize safety; I wonder if part of you is still expecting the room to turn dangerous."
      },
      {
        "text": "[Low voice] I do not answer when my sister calls, even though I know she is just checking in.",
        "suggestion": "You keep distance; I wonder if her voice gets through the numbness and makes feelings harder to manage."
      },
      {
        "text": "[Tense] Loud noises make me jump and then I get angry at myself.",
        "suggestion": "You jump then judge; I wonder if the anger covers shame about being vulnerable."
      },
      {
        "text": "[Quiet and guarded] When good things happen, I notice myself waiting for the other shoe to drop.",
        "suggestion": "You find yourself waiting for something to go wrong. I wonder if enjoying the good moment also brings a fear of losing it."
      },
      {
        "text": "[Flat] I drink to knock myself out sometimes because I do not want to dream.",
        "suggestion": "You knock yourself out before sleep can pull you back there; I guess it keeps nightmares and feelings at bay."
      },
      {
        "text": "[Slow and flat] I keep the lights low at home so nothing feels too sharp.",
        "suggestion": "You keep things dim and softened; I wonder if brightness feels too exposing or too sharp."
      },
      {
        "text": "[Quiet and guarded] I do not remember the last time I laughed, and even trying feels fake.",
        "suggestion": "You cannot reach laughter; I wonder if joy feels wrong somehow after so much loss."
      },
      {
        "text": "[Flat] I tell myself I am better off alone. Closeness gets complicated fast.",
        "suggestion": "That part seems protective; I wonder if it fears that closeness means hurting someone, being hurt, or losing control again."
      },
      {
        "text": "[Flat] I put the neighbour's invitation in the bin. Took it out again. Haven't replied.",
        "suggestion": "Maybe there is some wish for company there, alongside the need to keep your distance."
      },
      {
        "text": "[Guarded] I don't ask people to remember the date. Still notice when nobody does. Doesn't make much sense.",
        "suggestion": "I wonder if you want the loss to matter to someone else too, without having to explain it all."
      }
    ]
  },
  "staying-in-contact-intense-affect": {
    "case-sara": [
      {
        "text": "[Tearful] It hits me in a wave when I see his mug still in the cupboard, and then I cannot stop sobbing. I feel embarrassed by the sound of it, but it keeps coming.",
        "suggestion": "I am here with you. You do not need to apologize for the sobbing; we can take this moment slowly and pause if it becomes too much."
      },
      {
        "text": "[Tearful] My chest hurts like it is going to split open when I say I miss him. I try to hold it in because the ache feels too big for this room, but then my breath catches and I cannot pretend it is small.",
        "suggestion": "Missing him hurts right through your chest. I will stay close while we let only as much of that ache in as you can bear."
      },
      {
        "text": "[Tearful] I want to run when the grief starts because it feels endless. If I let one sob come, I am afraid the whole night will open and I will not find the edge of it again.",
        "suggestion": "The grief feels endless, and a part of you wants out. I will stay with you at the edge of it so you do not have to run or go under."
      },
      {
        "text": "[Panicked] I saw his photo in someone else's post and my stomach dropped so hard I started shaking.",
        "suggestion": "The photo hit like a sudden drop, and now the shaking is here. I am here with you in this one moment of missing him, letting it be a wave in this room rather than the whole story happening again."
      },
      {
        "text": "[Numb] Since the breakup, weekends feel like a blank wall. I do not see anything to look forward to.",
        "suggestion": "That blankness sounds frighteningly empty. I am here with you in it; let us name just one piece of the weekend wall without asking you to solve the whole future."
      },
      {
        "text": "[Embarrassed] I feel stupid for crying this hard, but I cannot stop it. I can hear myself making these wet, broken sounds, and part of me wants to apologize while another part just keeps breaking.",
        "suggestion": "You are hurting, and ashamed of how the crying sounds. I am here listening; you do not have to make it quieter or find all the words at once."
      },
      {
        "text": "[Numb] My hands are going numb; I feel far away, like I might leave the room without moving. Your face is still here, but it is starting to look like something on a screen.",
        "suggestion": "That far-away pull is getting strong. I am still here with you; let's name the distance in words so some part of you can stay connected to this room."
      },
      {
        "text": "[Warm and tearful] My friend's little boy hugged me goodbye and said he loved me, and I felt so much love back that I could hardly breathe.",
        "suggestion": "That love came in with so much force it almost took your breath. I can stay with you while it is warm, painful, and big all at once."
      },
      {
        "text": "[Tearful] I cannot look at you when I cry; it feels too exposed. If I see pity or even kindness on your face, I think I will lose the small bit of control I have left.",
        "suggestion": "You can look away and still not be alone. I will stay present while the exposed feeling has only a little room."
      },
      {
        "text": "[Fearful] If I let the crying start, I am scared it will take the whole night with it. I have gone home from sessions and cried until my face hurt, and I do not want to open something I cannot close.",
        "suggestion": "The fear is that crying will open wider than this hour can hold. I will stay with the first edge of it, and we will keep the room in view so you are not left alone with it tonight."
      },
      {
        "text": "[Crying, struggling to speak] I got home and wanted to tell him one tiny thing about my day. He's not there. I know that. It still hurts so much.",
        "suggestion": "That ordinary moment brings the loss so close. I'm here with you; you don't have to make the sadness smaller or find all the words at once."
      },
      {
        "text": "[Moved to tears] My sister said I could stay as long as I needed. I just started crying. I didn't realise how tired I was of trying not to need anybody.",
        "suggestion": "Being welcomed like that touches something very deeply. We can stay with the tears and the relief, without asking you to pull yourself together."
      }
    ],
    "case-michael": [
      {
        "text": "[Firm] My jaw locks and heat blasts up my neck when someone questions me, even here. It is like my body hears disrespect before my head knows what was said.",
        "suggestion": "I hear how quickly the anger rises, even with me. I am here listening. We can slow this down and put words to what feels disrespectful, without having to act on the anger."
      },
      {
        "text": "[Tense and ashamed] I grabbed my son's arm too hard when he would not listen, and his face keeps replaying. I feel sick, but part of me wants him to stop being scared of me already.",
        "suggestion": "That is such a hard mix: guilt, alarm, and wanting his fear to be over. I will stay with you as we face the look on his face without attacking you or excusing what happened."
      },
      {
        "text": "[Tense] Humiliation burns when I replay the meeting where I stumbled over my words. My face gets hot again, and I want to erase the whole scene before anyone can see how much it got to me.",
        "suggestion": "That meeting is here again in the heat of your face. I will not look away from the humiliation with you; we can let just a small part be felt without erasing the whole scene."
      },
      {
        "text": "[Firm] I can feel the snap coming; if I open my mouth, it will come out sharp. My jaw is already forward, and there is a part of me that wants the sharpness to land before I feel cornered.",
        "suggestion": "You caught the snap before it became action. I am here with you in that charged second, letting the sharpness be named instead of fired."
      },
      {
        "text": "[Trembling] My hands are shaking, and I can hear my father calling that weak. The more I try to stop them, the more ashamed I feel, like the weakness is right there in front of you.",
        "suggestion": "The shaking is here, and your father's contempt comes right behind it. I am staying steady with you; the shame can be seen here without being turned into weakness."
      },
      {
        "text": "[Tense and angry] I hate this small feeling; it makes me want to tower over someone. It starts as this tiny, exposed place in my chest, and then my whole body wants height, volume, and distance from it.",
        "suggestion": "Feeling that small is hard to bear. I am here with you, and we can take it slowly. You can name the urge without having to follow it."
      },
      {
        "text": "[Defensive] Part of me wants to walk out before this turns into me looking pathetic in front of you.",
        "suggestion": "Walking out would protect you from being seen as pathetic. I am here and not judging that shame; let it have a few words before the door decides for you."
      },
      {
        "text": "[Tense and angry] My voice is getting loud before I even decide to raise it. I can hear myself filling the room, and underneath it there is this flash of being dismissed that I do not want anyone to see.",
        "suggestion": "You are catching the surge while it is happening. I can stay steady with the heat while the part that felt dismissed gets words, so the anger does not have to fill the room."
      },
      {
        "text": "[Fearful] If I do not blow up, I feel like I will disappear. In the argument with my wife, the second I lower my voice, I feel myself getting smaller and smaller until there is nothing left of me.",
        "suggestion": "The blast keeps you from vanishing, and lowering your voice feels like becoming nothing. I am with both: the force that protects you and the smallness it is trying to save."
      },
      {
        "text": "[Firm] I do not trust myself when the heat starts looking for someone to punish. It feels like the anger scans the room for a target before I have had time to ask what actually hurt.",
        "suggestion": "I appreciate you naming the heat before it chooses a target. We can stay with the hurt signal under the anger while keeping the punishing impulse in words."
      },
      {
        "text": "[Voice breaking] My son said, 'You were nice today, Dad.' He meant it as a good thing. I can't stop thinking about what the other days must feel like for him.",
        "suggestion": "Hearing that brings a lot of pain about the other days. I'm here with you; we can let you feel it without turning this moment into a verdict on your whole self."
      },
      {
        "text": "[Angry, near tears] I worked so hard to keep everything together. Now she says she feels alone with me. I don't know whether to shout or just cry.",
        "suggestion": "There's so much hurt and anger here at once. I can stay with you in that; we don't have to force either feeling away or act on it."
      }
    ],
    "case-jason": [
      {
        "text": "[Quietly] Everything goes fuzzy and my heart races like I am failing out loud. I can still hear you, but the words blur together and I start trying to look normal instead of listening.",
        "suggestion": "Let's slow down. You do not need to find words right now. I am here; if it helps, notice my voice and where the chair supports you."
      },
      {
        "text": "[Trembling] My hands shake and I want to disappear before anyone notices. It is the same feeling as standing up in class: everyone can see the shaking before I can make one sentence.",
        "suggestion": "The shaking and the wish to disappear are both here. I will stay with you while they show, without making you hide them."
      },
      {
        "text": "[Panicked] I feel nauseous talking about the party, like I might disappear from embarrassment. Even saying I stood alone by the kitchen makes the room tilt and my face burn.",
        "suggestion": "That lonely kitchen scene brings nausea and burning shame right into this room. I will stay with one small piece so the shame has company without swallowing you."
      },
      {
        "text": "[Quietly] The room feels like it is shrinking around me, and I cannot find a normal sentence. The more I try to sound okay, the smaller my voice gets and the louder my heartbeat feels.",
        "suggestion": "The shrinking is happening while you are trying so hard to sound okay. I will stay close and we can take this one word at a time, without making the smaller voice a failure."
      },
      {
        "text": "[Fearful] I cannot get a full breath, and I am scared you can see me panicking. I keep trying to breathe quietly so I do not look dramatic, but that makes it feel even tighter.",
        "suggestion": "The panic is getting tighter because you are trying so hard to hide it. I am here, and you do not have to look composed for me; the uneven breath can be part of what we make room for."
      },
      {
        "text": "[Anxious] I want to hide under the table; my face feels like it is burning. I know that sounds childish, but the shame is so hot that even sitting upright feels like too much exposure.",
        "suggestion": "The shame feels almost unbearable right now. I am here with you. You can look away or pause; you do not have to force yourself to meet my eyes or find words."
      },
      {
        "text": "[Quietly] I cannot make eye contact right now; my face is burning. If I look up and see you watching me, I think the burning will take over and I will stop being able to speak.",
        "suggestion": "You do not have to make eye contact to stay connected. I am still with you while the burning has a little space."
      },
      {
        "text": "[Hesitant] My ears are ringing and I feel trapped, like everyone is watching. I know we are only in this room, but it feels like the whole seminar is staring at me again.",
        "suggestion": "The old seminar stare has crowded into this room. I am here with you as we mark the difference: this is the trapped feeling arriving, not the whole seminar happening again."
      },
      {
        "text": "[Panicked] When you remember what I said last week, I feel so relieved I could cry, and then I panic that I need this too much.",
        "suggestion": "Being remembered touches something huge, and then need starts to feel dangerous. I will stay with both the relief and the panic without making either wrong."
      },
      {
        "text": "[Fearful] I think I should leave before you notice how much I am panicking. I keep looking at the door and planning the fastest way out, even though another part of me wants you to help me stay.",
        "suggestion": "The door is pulling hard, and another part wants help staying. We can keep both in view so panic has a place here without getting to decide for you."
      },
      {
        "text": "[Tearful, trying to apologise] They kept a place for me. I know it's just a lunch. I can't stop crying about being wanted there. Sorry, this is embarrassing.",
        "suggestion": "Being wanted there has reached you very deeply. You don't have to apologise for the tears; I'll stay with you while you take it in."
      },
      {
        "text": "[Overwhelmed, looking down] I tried so hard to join in. Afterwards I cried in the stairwell because I still felt like the one nobody wanted to sit beside.",
        "suggestion": "After all that effort, feeling unwanted hurts so much. I'm with you here, and we can give that pain some room without asking you to try harder right now."
      }
    ],
    "case-laura": [
      {
        "text": "[Slow and flat] When the door slammed outside, I disappeared inside before I could tell whether I was safe.",
        "suggestion": "That slam took you far away. I am here with you. Could we take a moment to notice the room around us before asking anything more of you?"
      },
      {
        "text": "[Slow and flat] Everything goes numb when I try to feel anything about what happened. I can say the facts, but the second you ask how it felt, it is like the power cuts out inside me.",
        "suggestion": "The numbness is protecting you from too much. I will stay with you right where the power cuts out; we do not have to break through it to be in contact."
      },
      {
        "text": "[Tense and guarded] I feel like the room is far away, and I am watching through glass. I can see your mouth moving, but my body is already somewhere else, waiting for the next thing to happen.",
        "suggestion": "The glassy distance is already carrying you away from the danger feeling. I am still here with you, slow and close, while only a small piece of that waiting place is named."
      },
      {
        "text": "[Flat and guarded] My stomach drops and I freeze, like I am back waiting for the next blowup.",
        "suggestion": "That drop and freeze are old danger arriving in the room. I will stay with you at the edge of it and help your body notice that this moment is not the blowup."
      },
      {
        "text": "[Slow and flat] I want to go numb before the memory opens wider than I can close. I can feel the edge of it opening, and my first instinct is to disappear before I see too much.",
        "suggestion": "The numbness is trying to save you from seeing too much. I respect that protection; we can know the memory is near without opening it wider than you can bear."
      },
      {
        "text": "[Tense and guarded] I think I have to put my old cat to sleep tomorrow, and the guilt is so big I can barely say it.",
        "suggestion": "You love your cat, and this decision brings so much guilt. I am here with you. You do not have to explain or justify all of it at once."
      },
      {
        "text": "[Flat and guarded] I do not trust my own signals to tell me I am safe. My body says danger even when I know the door is closed and nothing is happening, so I do not know which part of me to believe.",
        "suggestion": "It is frightening when knowing the door is closed does not reach the danger signal. I can stay steady with both truths, without forcing either one to win."
      },
      {
        "text": "[Distant] I feel dizzy and far away, like the room is sliding back. Your voice sounds farther away than it was a minute ago, and I am scared I will float out before I can answer.",
        "suggestion": "The room is sliding back and you are afraid of floating out. I will stay in contact with you while we name just enough of the far-away feeling to keep you here."
      },
      {
        "text": "[Tense and guarded] My daughter said she missed me, and the love in that hit so hard I wanted to pull away.",
        "suggestion": "That love hit with enough force that pulling away made sense. I will stay with you while being missed touches you in a small, bearable way."
      },
      {
        "text": "[Slow and flat] I do not want to feel this at all; if it opens, I think I will disappear.",
        "suggestion": "That is the danger point: if feeling opens, you fear you vanish. I will stay with you at the first edge of it, and we will stop before it becomes too much."
      },
      {
        "text": "[Suddenly tearful] She said I didn't have to explain why I needed company. I couldn't speak. I wanted her there so much, and I was frightened of wanting it.",
        "suggestion": "Wanting her close and being frightened of that wanting are both very strong. I'm here; we can stay with just a little at a time, without making you explain it."
      },
      {
        "text": "[Distressed, voice fading] I was telling you about the flat, and now everything feels far away. I can hear you, but I can't quite feel myself sitting here.",
        "suggestion": "I'm here with you, and we can stop the story. If it helps, look around the room with me and notice where the chair supports you; we won't push for more feeling."
      }
    ],
    "case-carlos": [
      {
        "text": "[Angry, clenching fists] Heat is rising; my fists want to clench before I know what got hit. It is like my hands are ready to answer a threat before I can even name what felt threatening.",
        "suggestion": "Let's pause here. I can listen to how threatened and angry you feel, and we need to keep this in words, without threatening or hurting anyone."
      },
      {
        "text": "[Tense and angry] My voice wants to shout before anyone sees I am rattled. When my partner asks one careful question, I feel the volume rising to cover the part of me that got scared.",
        "suggestion": "I can stay with the force in you without it having to become shouting. The scared part does not have to be covered alone; we can keep the strength in words rather than threat."
      },
      {
        "text": "[Furious] When I read the news, I get so enraged I want to tear the whole system down.",
        "suggestion": "The rage is huge, and I am not backing away from it. Put the force into words, strong and clear, while we keep action out of it."
      },
      {
        "text": "[Guilty] My son hid behind the couch when I yelled, and the guilt hits so hard I can barely stay in my skin.",
        "suggestion": "That guilt shows how deeply his fear reaches you. I will stay with you near that ache; we can let it matter without turning it into self-attack or running from it."
      },
      {
        "text": "[Tense] I am about to walk out because I can feel my hands wanting to break something. I am still sitting here, but my body is already halfway to the door looking for anything solid.",
        "suggestion": "You are still here while the urge is looking for something solid. I will stay direct with you: the breaking impulse belongs in words here, and we will keep everyone safe while the wave passes."
      },
      {
        "text": "[Tense and angry] My chest is pounding like I am already in a fight. My shoulders are up, my eyes keep going to the door, and I can feel my body getting ready before I have chosen anything.",
        "suggestion": "Your body feels ready for a fight. I am here with you, and we can pause. You can notice that surge without having to follow it into action."
      },
      {
        "text": "[Furious] When that guy at work mocked me, I wanted to beat him until he understood not to laugh at me.",
        "suggestion": "The image is violent, and I am not backing away from you. We keep it in words here while the humiliation and fury get room without becoming action."
      },
      {
        "text": "[Fearful] I want to scare people off me before they see I am scared. If someone hears my voice shake, I feel like I have to get bigger fast so they do not know where to hurt me.",
        "suggestion": "That bigger force is trying to protect the scared place from being seen. I will stay with both: the fear that could be hurt and the force that wants distance."
      },
      {
        "text": "[Tense and angry] If I let that disrespect pass, I feel like I am nothing. The word nothing hits so hard that my chest goes hot and I want to prove immediately that I still matter.",
        "suggestion": "That word 'nothing' lands like a threat to your whole worth. I will stay with you in that sting while the fight impulse stays contained and named."
      },
      {
        "text": "[Tense and angry] I feel out of control, and I hate that you can see it. My hands are open because I am trying, but inside it feels humiliating that you can watch me fight myself.",
        "suggestion": "I can see how hard you are working not to act. I will stay steady with you in the humiliation of being seen there, with one part burning and another part choosing restraint."
      },
      {
        "text": "[Furious, then shaking] He laughed when I asked him to stop. I can feel the anger again just telling you. I don't want to take it out on anybody, but it's right here.",
        "suggestion": "The anger is very close, and you don't want to act on it. I'm staying with you; we can slow the pace while making room for what hurt, without turning it into an attack."
      },
      {
        "text": "[Choked up] My daughter put her arms around me. I froze. I wanted to hold her, but I was so scared of getting it wrong that I couldn't move.",
        "suggestion": "You wanted that closeness so much, and fear stopped you. We can stay here with how strongly that touches you, without asking you to get this moment right."
      }
    ],
    "case-nina": [
      {
        "text": "[Guilty] I cannot stop crying, and then I feel ashamed for needing so much. My son only asked where his socks were, and suddenly I was at the counter sobbing like I had ruined everything.",
        "suggestion": "The tears are here, and you feel ashamed of needing so much. I am listening. You do not have to look after me or apologize for what you need."
      },
      {
        "text": "[Apologetic] My chest is tight and my head throbs from keeping everyone okay. I can feel the list running through me: the boys, my mother, work, dinner, messages, and there is no room left to breathe.",
        "suggestion": "You have held everyone up so long that the pressure is aching through you. I will stay with you as some of it gets named instead of carried alone."
      },
      {
        "text": "[Torn] I keep saying sorry for feeling this much, like I am taking too much. Even now I want to check whether you are tired of me, and then I hate that I am making you manage me too.",
        "suggestion": "The feeling is large, and then you apologize for its size. I am here and not moving away from how much there is; let the feeling take up a little room before you make yourself smaller."
      },
      {
        "text": "[Tired] I snapped at my son for needing me, and then I cried in the bathroom because I felt like a terrible mother.",
        "suggestion": "That guilt is intense because being a good mother matters so much to you. I am here with you while the tears and shame are both present, and we will keep them from becoming a verdict on who you are."
      },
      {
        "text": "[Apologetic] I feel like I am failing everyone, and my body wants to collapse. I sat on the bathroom floor for two minutes and even that felt stolen from someone who needed me.",
        "suggestion": "Your whole system wants to fold after carrying everyone for so long. I am here as the weight shows up; we can let some of it be held between us instead of stolen from someone else."
      },
      {
        "text": "[Torn] If I stop doing, I will fall apart and someone will need me anyway. I can feel the tears right behind my eyes, but the second they come I picture someone calling from the next room.",
        "suggestion": "Even stopping feels frightening, with the tears so close. I am here with you now. We can give this moment some time; you do not have to take care of everyone while we talk."
      },
      {
        "text": "[Tired] I want to leave the second I feel how badly I need someone to help me. The need rises and I get angry at myself, like I should be able to stand up and carry the whole thing alone.",
        "suggestion": "Needing help has become the danger, so leaving makes sense. I will stay with you for this moment while the need is here without apology."
      },
      {
        "text": "[Apologetic] Sometimes I fantasize about driving away and not telling anyone where I went, and then the guilt makes me feel sick.",
        "suggestion": "The wish to escape and the guilt are both strong. We can stay with both without choosing one against the other: the exhausted part that wants out, and the caring part that feels sick about leaving."
      },
      {
        "text": "[Torn] I cannot catch my breath when I stop taking care of everyone. The second I sit down, I feel the whole house leaning toward me, like if I breathe for myself someone else will fall.",
        "suggestion": "The whole house seems to lean on you the second you make room for yourself. I am here with you while your own breath gets a little space without making anyone else fall."
      },
      {
        "text": "[Tearful] When my son says he would rather stay at his father's, I feel so much grief I cannot catch my breath.",
        "suggestion": "That grief hits where losing him feels possible. I will stay with you as we take in only a small piece of that loss."
      },
      {
        "text": "[Sobbing] They all went out, and I finally had the house to myself. I just cried. I needed the quiet so badly, and then I felt awful for being glad they'd gone.",
        "suggestion": "There's deep relief and guilt arriving right beside it. I'm with you; we can let the relief have some room without making it mean you don't love them."
      },
      {
        "text": "[Tearful, suddenly angry] I wanted just once to be the one someone looked after. Saying it makes me angry. Then I hear how selfish I sound, and I want to take it back.",
        "suggestion": "That wish has been waiting a long time, and the anger is strong. You don't have to take it back for my sake; I can stay with you while we approach it slowly."
      }
    ],
    "case-aisha": [
      {
        "text": "[Longing, ashamed] I know you are my therapist, but sometimes I want you to love me romantically, in a way therapists are not supposed to.",
        "suggestion": "I hear how strong that longing is, and you can talk about it here. I am here as your therapist; our relationship will not become romantic. We can stay with the feeling without shaming you or acting on it."
      },
      {
        "text": "[Panicked] The emptiness is burning so badly that I start thinking I have to hurt myself just to prove I am still here.",
        "suggestion": "I am glad you put that into words. The emptiness is burning so desperately that harm starts to look like proof you exist; safety matters, and the need to feel real can stay here with me in words."
      },
      {
        "text": "[Desperate] I want to bolt from this room before you see how desperate I am. If you see it, I am afraid you will either pull away or become the only thing keeping me together.",
        "suggestion": "Part of you wants to run before the need is seen. I can stay steady with the fear of being too much and too dependent, taking only one small piece of it into the room."
      },
      {
        "text": "[Desperate] When you say we have to stop on time, I want to cut myself so you can see how bad it gets.",
        "suggestion": "That urge tells me how unbearable the ending feels and how badly you need it seen. We take the cutting risk seriously, and the message can stay here between us in words."
      },
      {
        "text": "[Desperate] I feel like I am too much, and I hate that I need you to stay.",
        "suggestion": "The need for me feels unbearable and shameful at the same time. I can sit with that exposed needing for a moment without treating you as too much."
      },
      {
        "text": "[Panicked] My chest feels like a black hole, and I am scared it will swallow me. The more I notice it, the more I think I will drop into it and not come back the same.",
        "suggestion": "I am here with you. If paying closer attention makes it too much, we can pause and notice the room around us instead. You do not have to go further into it now."
      },
      {
        "text": "[Panicked] My last therapist said she was transferring me, and I still feel the panic like she threw me away.",
        "suggestion": "The old transfer still hits like being thrown away. I can sit in this room with the panic while we let it know which ending it belongs to."
      },
      {
        "text": "[Panicked] The urge to scratch myself is getting loud, and I need something real before I disappear.",
        "suggestion": "The scratching urge is trying to give you something solid before you vanish. I will take safety seriously and stay close to the need to feel real in words."
      },
      {
        "text": "[Ashamed] The crying is taking over, and I feel disgusting for needing you to see it. I want you to stay, and that makes the shame worse, like needing comfort is the most exposed thing about me.",
        "suggestion": "The shame and tears are tangled together: needing comfort feels disgusting. I can meet that need gently without joining the disgust."
      },
      {
        "text": "[Desperate] If you cancel, I will fall apart and then hate myself for needing you. I know one canceled session should not feel like the floor disappears, but that is exactly what happens in my body.",
        "suggestion": "A cancellation feels like losing the floor, and then shame punishes you for needing me. I can meet both without making you carry the fall alone."
      },
      {
        "text": "[Panicked, speaking rapidly] When you go quiet, I think I've lost you. I can see you're still here, but I can't make myself believe it. Please say something.",
        "suggestion": "I'm here and listening. The silence has made that fear very strong; we can slow down together, and I can keep speaking while we find a pace that helps you stay here with me."
      },
      {
        "text": "[Angry through tears] Don't tell me this is progress. I waited instead of sending another message, and it hurt the whole time. I need you to know how hard it was.",
        "suggestion": "It hurt all the way through, and my calling it progress could miss that cost. I want to stay with how hard it was, without asking you to feel pleased about it."
      }
    ],
    "case-david": [
      {
        "text": "[Controlled] My face is burning, and I want to cut this off before you see how exposed I am.",
        "suggestion": "Feeling that exposed is hard to bear. I am here listening, and you can choose how much you show me. We can pause without cutting off what you are feeling."
      },
      {
        "text": "[Disappointed and angry] Therapy is not working. I feel worse, and maybe it is because you do not have enough experience for someone like me.",
        "suggestion": "It matters that you tell me this. Feeling worse brings disappointment and anger right into the room, and I want to meet that with you before I defend or explain."
      },
      {
        "text": "[Defensive] I want to walk out before you see me lose face. My throat is tight, my suit suddenly feels too small, and I would rather leave than sit here looking needy.",
        "suggestion": "Leaving would save you from being seen as needy. I can stay steady while that humiliation flickers into view, without taking your dignity."
      },
      {
        "text": "[Ashamed] I keep seeing my wife's face after she found out about the affair, and the guilt is so hot I want to crawl out of my skin.",
        "suggestion": "Her face brings searing guilt. I can stay near the remorse with you, close enough that it is not hidden and slow enough that it does not consume you."
      },
      {
        "text": "[Furious] I cannot stand the word 'cold'; it makes me feel exposed and furious. When my wife says it, I feel like she has found the one thing I cannot defend against, and I want to shut her down hard.",
        "suggestion": "That word finds the unguarded place; shame and fury rush in together. I will stay with the heat of it while the urge to shut her down remains in words."
      },
      {
        "text": "[Ashamed] I am embarrassed I snapped at home; I sounded exactly like the person I judge. The sentence came out sharp, and then I saw myself from the outside and felt this hot disgust in my face.",
        "suggestion": "Seeing how you acted brings so much shame and disgust. I am here with you; we can hear that pain without turning it into an attack on you."
      },
      {
        "text": "[Controlled] I feel like shutting down so I do not say something desperate. I can feel the sentence coming up, and I hate that I might need my wife this much in front of you.",
        "suggestion": "The shutdown is holding back how badly you might need her. I can meet that edge of desperation without exposing all of it at once."
      },
      {
        "text": "[Clearly uncomfortable] I used sexual pressure with someone years ago, and saying it makes me feel like there is no way back from who I was.",
        "suggestion": "This is a serious thing to say aloud. I can stay with you in the shame and responsibility, holding the harm clearly while not letting 'no way back' swallow the whole room."
      },
      {
        "text": "[Fearful] My defense is coming up fast, and I am scared I will lose control of my face. I can feel the polite expression cracking, and if it cracks I do not know what you will see.",
        "suggestion": "Something in your face is close to cracking, and that feels dangerous. I can stay with you at the moment before the mask gives way, without forcing it off."
      },
      {
        "text": "[Angry, clenching fists] When I picture the man my wife was texting, I want to smash his face until he stops mattering.",
        "suggestion": "That violent image is fierce, and I am taking it seriously. I will not step away; we keep it spoken, not acted, while the rage and injuredness are here."
      },
      {
        "text": "[Voice cracking, then hardening] She said the children relax when I'm away. I can't get that out of my head. Don't look at me as if you've finally found the bad person underneath.",
        "suggestion": "That remark has hurt deeply, and being seen as only a bad person would hurt again. I'm here with the pain you are showing me; we don't have to turn it into a verdict."
      },
      {
        "text": "[Angry, trembling] I've held everything together for years. Now I'm sitting here barely able to speak, and I hate that you can see me like this.",
        "suggestion": "Being seen without that control feels exposing. I can stay here without asking you to perform or pull yourself together; we can take the next moment slowly."
      }
    ],
    "case-marcus": [
      {
        "text": "[Flat] A wave is coming up my chest, and I want to shut it down before it takes me back there.",
        "suggestion": "You are afraid the feeling will take you back there. I am here with you. We can pause and notice where we are now, without going further into the memory."
      },
      {
        "text": "[Horrified, low voice] I saw footage from another war zone, children under rubble, and my whole body went sick and cold.",
        "suggestion": "Those children under rubble bring horror and a sick coldness through you. I can bear looking at that horror with you, while the present stays close enough."
      },
      {
        "text": "[Slow and flat] I feel nothing and everything at once, and it scares me. When the memory gets close, my chest goes hollow and then suddenly too full, like the switch is broken.",
        "suggestion": "Numb and flooded at once is frightening. We can let one signal be known here, without asking the whole memory to arrive."
      },
      {
        "text": "[Slow and flat] I want to shut down before the room starts feeling unreal. The edges of the walls are already softening, and I am afraid that if I keep talking, I will not know where I am.",
        "suggestion": "The room softening is an important warning. I will slow with you at that threshold, close to the feeling but not inside the whole memory."
      },
      {
        "text": "[Trembling] My hands start trembling when I try to say even one piece of what happened. The story is still behind my teeth, but my hands are already telling you it is too close.",
        "suggestion": "Your hands are already telling us the story is too near. I can keep company with the tremble itself, before any more words have to come."
      },
      {
        "text": "[Low voice] When I get home and it is silent, the weight lands on my chest like a door closing.",
        "suggestion": "As you describe that silence, I hear how heavy it feels. I am here with you now. We can sit with this for a moment without asking you to say more."
      },
      {
        "text": "[Flat] After a crowd, my skin buzzes like I am still on watch. I can be home with the door locked and still feel every shoulder from the train brushing past me.",
        "suggestion": "The crowd has passed, but your skin is still on duty. I can sit with that buzzing after-alarm without demanding that it switch off."
      },
      {
        "text": "[Hypervigilant] I am afraid that if I let myself feel it, the whole thing will swallow me. I can handle facts, but feelings make it seem like the room, the past, and my body all collapse into one place.",
        "suggestion": "The terror is that feeling will fold the room, the past, and your body into one place. I will stay oriented with you while only a fragment comes near."
      },
      {
        "text": "[Slow and flat] I want to disappear when the memories crowd in and the room stops feeling real. It is not that I want to die in that second; I want not to be located anywhere the memories can find me.",
        "suggestion": "Wanting to disappear is a way to get away from memories that seem to find you anywhere. I am taking that seriously and keeping you located here while the crowding gets words."
      },
      {
        "text": "[Hopeless] When the nights get long, I think it would be easier not to be alive, and then I hate myself for saying it.",
        "suggestion": "I am glad you said the wish not to be alive out loud. We take safety seriously, and I will stay with the hopelessness and self-hate without leaving either of them alone."
      },
      {
        "text": "[Rigid, voice strained] Too close. The chair. I know you're not doing anything, but I need you farther away. I can't keep talking like this.",
        "suggestion": "I'll move back. We can stop talking about it; I'm here at this distance, and you can let me know whether there's enough space before we do anything else."
      },
      {
        "text": "[Tearful, struggling to stay composed] I remembered his laugh. Haven't heard it in years. It hurts more than remembering what happened. Don't ask me for the story.",
        "suggestion": "We don't need the story. His laugh has brought the loss close, and I can stay with you while you let in only as much of that sadness as feels manageable."
      }
    ]
  },
  "self-disclosure": {
    "case-sara": [
      {
        "text": "[Tearful] When I say I still miss him, do you secretly think I sound ridiculous?",
        "suggestion": "I do not see your grief as ridiculous. I am moved that you can bring it here, even when you feel embarrassed. What is it like to hear me say that?"
      },
      {
        "text": "[Tearful] You probably get tired of hearing me cry about him every week.",
        "suggestion": "Your tears do not tire me. I feel protective of how alone this gets for you, and I want that aloneness to have company here. Let that in only as much as feels safe."
      },
      {
        "text": "[Tearful] When I cry and you stay quiet, I worry my tears make you want to pull away.",
        "suggestion": "Your tears do not make me pull away. When you cry, I feel close and careful, not distant. Let's notice the part of you that expected me to leave."
      },
      {
        "text": "[Softly] This is my first time in therapy. Do you expect me to know where to start?",
        "suggestion": "No. I do not expect you to know where to start. I can help us find a beginning; you do not have to perform therapy correctly for me."
      },
      {
        "text": "[Embarrassed] I am embarrassed that you see me this messy and needy.",
        "suggestion": "I do not judge the mess or the need. I feel respect for the courage it takes to let me see them, and I want us to notice the shame that expected something harsher."
      },
      {
        "text": "[Hesitant] Do you actually believe I will not still be alone a year from now, or are you just trying to comfort me?",
        "suggestion": "I cannot promise what a year will bring, and I do not want to give you false certainty. I am willing to work with you on the loneliness rather than dismiss it. What is it like to hear that?"
      },
      {
        "text": "[Fearful] When I ask if I am too much, I am afraid you will start pulling away.",
        "suggestion": "You do not feel like too much to me. I feel present and willing to stay close to this fear, without asking you to believe me faster than you can."
      },
      {
        "text": "[Hesitant] Are you in a relationship? Does that make you judge me?",
        "suggestion": "I keep details of my relationship private here, and I can say clearly that I am not judging you. I am interested in what it means to ask me that, and what you fear I might see in you."
      },
      {
        "text": "[Ashamed] I hate that I need anyone, and needing you makes me feel exposed.",
        "suggestion": "Hearing that, I feel tenderness for how risky needing is for you. I am not pulling away from the need; we can notice the part of you that expects it to cost you."
      },
      {
        "text": "[Hesitant] Do you actually care about me, or is caring just part of your job?",
        "suggestion": "I do care about you in this therapy relationship. The boundaries are part of caring responsibly, not a sign that the care is fake. Let's notice what hearing both brings up."
      },
      {
        "text": "[Tentative] When I tell you I checked his profile again, do you think, 'Here we go, she hasn't learned anything'?",
        "suggestion": "I don't see that as a failure to learn. I'm interested in what draws you back at those moments. It sounds as though telling me brings a fear that I'll lose patience with you."
      },
      {
        "text": "[Looking at the therapist] You smiled when I said I went to the cinema alone. Were you pleased, or was that just encouragement?",
        "suggestion": "I was pleased to hear you found an evening you enjoyed. My smile was real; you don't have to keep making progress to earn it. What was it like to notice it?"
      }
    ],
    "case-michael": [
      {
        "text": "[Challenging] Be honest—do I sound weak when I talk about being hurt?",
        "suggestion": "I do not see acknowledging hurt as weakness. I respect your willingness to say it directly. What happens for you as you hear that?"
      },
      {
        "text": "[Tense] When I ask if you get angry too, I need to know you will not look down on mine.",
        "suggestion": "I know anger in myself too, and I do not look down on yours. I feel steady enough to stay with it here; I am not above the feeling you are afraid I will judge."
      },
      {
        "text": "[Tense] You probably think I am the problem at home, like everyone else does.",
        "suggestion": "I do not see you as the problem. I feel how much pain is under the heat, and I want us to stay with that without turning you into the problem."
      },
      {
        "text": "[Anxious] When I admit I yelled, I look at your face for judgment.",
        "suggestion": "I am not judging you. I feel concerned about what yelling costs you and the people you love, and also respectful that you are willing to look at it here."
      },
      {
        "text": "[Challenging] Do therapists get tired of hearing the same blowup story again?",
        "suggestion": "I am not tired of hearing it. I feel focused when we come back to the split second it turns, because that is where your control can grow."
      },
      {
        "text": "[Challenging] Are you strong enough to handle me when I am mad?",
        "suggestion": "I am willing to listen to your anger, and I will be clear if we need to pause. I do not want this to become a contest of strength. What would help you know I am taking you seriously?"
      },
      {
        "text": "[Firm] You look calm while I describe yelling at home; does any of this actually get to you?",
        "suggestion": "Yes, it does get to me. I stay calm on purpose so we can keep looking at it without either of us turning away; my calm is steadiness, not distance."
      },
      {
        "text": "[Challenging] Do you respect working with someone who gets as heated as I do?",
        "suggestion": "I do respect working with you. I feel the seriousness behind your directness and the cost you are trying to face, and I want us to make room for how hard respect from me may be to take in."
      },
      {
        "text": "[Curious] Are you married? I wonder if you take your anger home.",
        "suggestion": "I keep details of my relationship private here, and I do know the work of slowing anger before it spills into relationships. I am not looking at yours from a distance. Let's notice why that matters for you to know."
      },
      {
        "text": "[Embarrassed] Tell me you get why this is hard, because I feel ridiculous needing help.",
        "suggestion": "I do get why this is hard. I hear pressure and hurt in it, not something ridiculous, and I want to speak directly to the part expecting contempt from me."
      },
      {
        "text": "[Direct] When I get blunt like this, do you take it personally? I don't want you tiptoeing around me.",
        "suggestion": "I notice the force in your voice, and I want to stay direct with you rather than tiptoe. I can tell you if something affects our conversation. It matters to you that we can speak honestly without either of us pulling back."
      },
      {
        "text": "[Concerned] If I tell you I was jealous of my son's coach, can you still respect me? It sounds ridiculous even saying it.",
        "suggestion": "Yes, I can respect you while hearing about jealousy. I appreciate your willingness to show me something you're uncomfortable with. You seem worried this feeling will change how I see you."
      }
    ],
    "case-jason": [
      {
        "text": "[Quietly] When I go quiet, I worry you are sitting there wishing I would hurry up.",
        "suggestion": "I am still interested when you are quiet. I do not need you to hurry for my sake. What do you notice as I say that?"
      },
      {
        "text": "[Hesitant] I ask if you ever feel awkward because I feel like an alien here.",
        "suggestion": "I do know awkwardness in myself, and it makes me want to move gently here with you. That may make this feel less alone, or it may not yet."
      },
      {
        "text": "[Long pause] When I pause too long, I imagine you are thinking I am boring.",
        "suggestion": "I do not experience you as boring. I feel curious and with you, including in the pauses, and the pauses do not make me leave."
      },
      {
        "text": "[Hesitant] Is it okay that I do not know what to say?",
        "suggestion": "It is okay not to know what to say. I feel patient with you here; the not-knowing does not make you fail this with me."
      },
      {
        "text": "[Hesitant] When I skipped the party, did you feel disappointed in me or think I avoided too much again?",
        "suggestion": "No. I do not feel disappointed. I feel aware of how much that party demanded from your whole system, and I want my answer to meet the part expecting a grade."
      },
      {
        "text": "[Hesitant] Do you get impatient when I go quiet and cannot find words?",
        "suggestion": "I notice a wish to help you find the words, but I do not want that wish to become pressure. I am choosing to give the pause some room. How is that for you?"
      },
      {
        "text": "[Quietly] When I get quiet, do you judge me or get annoyed inside?",
        "suggestion": "I am not judging your quiet, and I do not feel annoyed. I respect the effort it takes to stay here. Your quiet can be part of the work, not something to apologize for."
      },
      {
        "text": "[Hesitant] If I say something awkward here, would you tell me, or just sit there judging it?",
        "suggestion": "I would try to be honest and kind, not secretly judging you. I feel protective of the part already braced for ridicule."
      },
      {
        "text": "[Hesitant] Do you ever get nervous in groups, or is that just me?",
        "suggestion": "Yes, I can get nervous in groups sometimes. I tell you that because I do not see your fear as strange or alien; it belongs to a human range, even if yours is painful."
      },
      {
        "text": "[Quietly] When I ask if I will ever be less anxious, I need to know if you actually believe that.",
        "suggestion": "I do feel hope with you. I feel it because I see how hard you keep reaching for contact even while fear pulls you back."
      },
      {
        "text": "[Hesitant] Can I tell you if a question doesn't make sense? I usually just try to answer anyway.",
        "suggestion": "Yes. I would rather know that my question doesn't make sense than have you struggle to give an answer for me. I'll try saying it differently. It sounds like it takes some courage to ask that here."
      },
      {
        "text": "[Quietly] You don't seem embarrassed when I can't get a sentence out. Are you really okay sitting here like that?",
        "suggestion": "Yes, I'm okay sitting with you while words are hard to find. I don't need you to speak smoothly for this time to matter. What is it like to hear that?"
      }
    ],
    "case-laura": [
      {
        "text": "[Slow and flat] When I feel nothing, do you get uncomfortable or think I am unreachable?",
        "suggestion": "I want to understand what the numbness is like for you, rather than decide you are unreachable. I am choosing to slow down; you do not have to produce a feeling for me. What is it like to hear that?"
      },
      {
        "text": "[Hesitant] Are you annoyed that I keep protecting myself instead of opening up?",
        "suggestion": "I am not annoyed. I feel respect for how much protecting yourself has mattered. You can take in only the part of that that feels true."
      },
      {
        "text": "[Tense and guarded] You seem calm—do you actually get what this is like?",
        "suggestion": "I do feel the weight of it, and I stay calm on purpose so this can feel safer. My calm is meant as steadiness, not distance."
      },
      {
        "text": "[Slow and flat] Have you worked with trauma like mine, or am I too shut down for this?",
        "suggestion": "Yes, I have worked with trauma before, and I do not see your shutdown as a failure. I will also tell you if I think we need more support. Your shutdown does not make this impossible for me."
      },
      {
        "text": "[Distant] After hearing what happened, do you think less of me or see me as damaged?",
        "suggestion": "I do not think less of you. I feel sadness for what you carried and respect for how carefully you survived."
      },
      {
        "text": "[Hesitant] Will you push me into details if I stay quiet too long?",
        "suggestion": "I do not want to push you into details. I want to understand at a pace you can choose, and you can tell me if I move too fast."
      },
      {
        "text": "[Hesitant] Can you tell when I am far away, or do I just seem difficult?",
        "suggestion": "Sometimes I can tell you are far away, and when I notice it I feel more protective of pace than of going deeper. I do not read it as difficult."
      },
      {
        "text": "[Hesitant] Do you think your kindness will make me worse or more dependent?",
        "suggestion": "I do not want my kindness to force anything or make you dependent on me. I want care here to be something your protective parts can test, with you keeping choice."
      },
      {
        "text": "[Slow and flat] When I go blank, do you worry I am about to break down?",
        "suggestion": "I am not worried about you breaking down with me. I feel ready to slow down the moment you need it, and I do not need you to stay composed for me."
      },
      {
        "text": "[Curious] Do you believe I can feel again, or are you just being kind?",
        "suggestion": "Yes, I do believe more feeling is possible, and I am not saying that just to be kind. I am patient about the road there; we do not have to force it to prove it."
      },
      {
        "text": "[Guarded, after a pause] You put your pen down when I mentioned the drinking. Why?",
        "suggestion": "I put it down because I wanted to give you my full attention rather than keep writing. I can see that you noticed the change. What did it seem to mean to you?"
      },
      {
        "text": "[Slowly] Do you need to feel close to me for this to work? Because I can't promise that.",
        "suggestion": "I value getting to know you, but I don't need you to give me a feeling of closeness. We can work at a distance that feels manageable to you. It sounds important that I don't make closeness another demand."
      }
    ],
    "case-carlos": [
      {
        "text": "[Challenging] Do you think I am a bad dad for losing it?",
        "suggestion": "I do not want to reduce you to a label like \"bad dad\". I care about helping you change how you respond, and I take the effect on your children seriously. What is it like to hear both parts?"
      },
      {
        "text": "[Tense] When you talk about vulnerability, are you trying to make me soft?",
        "suggestion": "I am not trying to make you soft. I feel respect for your strength, and I want it to become safer for the people you love."
      },
      {
        "text": "[Tense and angry] When I describe the heat in me, does any of it scare you?",
        "suggestion": "I feel alert and steady with you, not scared of you. I want us to use that steadiness to look at the heat safely."
      },
      {
        "text": "[Ashamed] You probably look at me and just see another angry guy.",
        "suggestion": "I do not see only anger. I feel the pride, hurt, and loyalty that come up fast underneath it. You are more to me than another angry guy."
      },
      {
        "text": "[Tense and angry] Are you tough enough to sit with me when I get this angry?",
        "suggestion": "I feel steady enough to sit with your anger. I am not here to overpower you or be overpowered by you; this does not need to become a contest. We can use my steadiness to understand what the anger protects."
      },
      {
        "text": "[Ashamed] Can you respect me if you have seen how ugly my temper gets?",
        "suggestion": "I can respect you and take the harm from your temper seriously. I care about the effort you are making to face it. What is it like to hear that without having to hide what happened?"
      },
      {
        "text": "[Challenging] Does that breathing stuff work for you when you feel ready to snap?",
        "suggestion": "Yes. Slowing my breath helps me keep choice when activation rises. I bring it in because I respect control, not because I see it as weakness."
      },
      {
        "text": "[Curious] Are you married, and do you ever lose your temper with people you love?",
        "suggestion": "I keep details of my relationship private here, and I can say anger is human to me. I am not sitting above yours in judgment. We can notice what the privacy and the honesty each stir in you."
      },
      {
        "text": "[Challenging] Do you actually think I can change, or are you saying what therapists say?",
        "suggestion": "I do think you can change, and I am not saying it as a line. I feel that most when I hear how much your family matters to you."
      },
      {
        "text": "[Defensive] Be honest, do you dread sessions when I come in this armored?",
        "suggestion": "I do not dread them. I feel alert, engaged, and respectful of the commitment under the armor. You do not have to arrive unarmored for me to want to work with you."
      },
      {
        "text": "[Watching closely] You went quiet when I said my daughter flinched. Did that change what you think of me?",
        "suggestion": "I felt concerned about what that moment was like for both of you. I want to take her fear seriously and keep talking with you about it. You're watching for whether I can do that without reducing you to that one moment."
      },
      {
        "text": "[Uneasy] Do you actually want to hear the good stuff too? I fixed her bike, and we had a decent afternoon. Doesn't sound like therapy material.",
        "suggestion": "I do want to hear that. I'm interested in the moments when you feel connected with her, as well as the moments that go wrong. I'd like to hear what that afternoon was like for you."
      }
    ],
    "case-nina": [
      {
        "text": "[Guilty] I feel selfish even taking up space here instead of helping someone else.",
        "suggestion": "I want there to be room for your needs here. I do not experience listening to you as taking something away from someone else. How is it to hear that?"
      },
      {
        "text": "[Apologetic] When I say I am resentful, are you judging me for not being kinder?",
        "suggestion": "I do not judge the resentment. I feel sad about how long you have carried too much alone, and I want that overburdened place to be met rather than corrected."
      },
      {
        "text": "[Torn] You probably think I should just toughen up and stop making everything so hard.",
        "suggestion": "I do not think you should toughen up. I feel compassion for how much you override yourself, and I want that to meet the part that came prepared for criticism."
      },
      {
        "text": "[Hesitant] Do you ever feel guilty resting, or is that just a me problem?",
        "suggestion": "I know guilt about rest in my own life too, and that helps me take yours seriously. I am not treating it as silly or only a you problem."
      },
      {
        "text": "[Tearful] When I cry like this, does it make you uncomfortable with me?",
        "suggestion": "Your tears do not make me uncomfortable with you. I feel closer to you when they come, because they let me meet what you usually carry alone."
      },
      {
        "text": "[Torn] When I ask for help, do I become a burden to you too?",
        "suggestion": "You do not become a burden to me when you ask for help. I feel concern for how alone you are with so much responsibility, and that concern is mine to hold, not yours to manage."
      },
      {
        "text": "[Hesitant] Is it okay if I ask for help here without apologizing first?",
        "suggestion": "Yes, it is okay to ask for help here. I feel glad when you do, and I want that gladness to meet the expectation that asking is too much."
      },
      {
        "text": "[Mistrustful] Do you get tired of me apologizing every time I need something?",
        "suggestion": "You are not tiring to me. I feel warmth toward the needs you keep apologizing for, and we can go slowly with how hard that warmth is to take in."
      },
      {
        "text": "[Hesitant] Will you tell me if I am doing therapy wrong, or will you just let me fail quietly?",
        "suggestion": "I would tell you gently if I thought we were off track. I feel respect for how hard you are trying here, and therapy does not need to become another place to perform perfectly."
      },
      {
        "text": "[Hesitant] Do you really think I deserve care when I have not earned it?",
        "suggestion": "Yes, I think you deserve care before you have earned anything. I feel clear about that here. The doubting part does not have to believe me quickly."
      },
      {
        "text": "[Apologetic] I noticed you took a breath when I said yes to another favour. Are you disappointed in me?",
        "suggestion": "I'm not disappointed in you. I noticed how quickly your own tiredness disappeared from the conversation, and I wanted to slow down with you. It seems that breath made you worry you'd let me down too."
      },
      {
        "text": "[Uneasy] If I get angry with you, will you tell me how it affects you, or just stay pleasant? I wouldn't know if I'd hurt you.",
        "suggestion": "I can tell you when something affects our conversation, and I won't ask you to take care of my feelings. I want you to have room to be angry with me. It sounds as though not knowing my reaction would leave you worrying about me."
      }
    ],
    "case-aisha": [
      {
        "text": "[Hesitant] Do you actually care about me or are you paid to?",
        "suggestion": "I care about you within this therapy relationship. Being paid is part of my professional role, and that role also sets limits on what I can offer. What is it like to hear those things together?"
      },
      {
        "text": "[Desperate] When I ask whether you will leave, I need to know if you already want distance.",
        "suggestion": "I feel the force of that fear, and I am not seeking distance from you here. I am here to be dependable and clear, especially when the fear says I am already leaving."
      },
      {
        "text": "[Hesitant] Did I scare you when I said I wanted to hurt myself?",
        "suggestion": "You did not scare me away. I was concerned because your safety matters, and I am still here with you. My concern means careful closeness, not distance."
      },
      {
        "text": "[Hurt] When you did not message me back, I felt hurt and wondered if the boundary mattered more than me.",
        "suggestion": "I am sorry the boundary hurt you. The boundary is real, and my care is real too; one does not cancel the other. What happens as you hear both of those from me?"
      },
      {
        "text": "[Fearful] Are you angry with me, or did I already ruin this?",
        "suggestion": "I am not angry with you. I feel tenderness toward the scared part expecting the connection to break; we can understand that expectation together."
      },
      {
        "text": "[Ashamed] When I get intense like this, do you think I am too much?",
        "suggestion": "I take your pain seriously, and I want to understand it without making you hide how intense it is. I will also be clear about my limits. What do you hear in that?"
      },
      {
        "text": "[Desperate] When I ask if you like me, part of me already expects the answer to disappear.",
        "suggestion": "I do feel warmth and care for you in this therapy relationship, and I am glad you asked directly. That answer has boundaries, and it is real. What happens inside as you hear both?"
      },
      {
        "text": "[Hesitant] Are you disappointed in me, or are you just not saying it?",
        "suggestion": "Disappointment is not what I am holding. I feel grateful you are letting me see what is happening, and we can notice how quickly you expected disappointment from me."
      },
      {
        "text": "[Accusing] You were two minutes late again. Do you even notice what that does to me, or is it just nothing to you?",
        "suggestion": "I did notice I was late, and I am sorry. It was not nothing to me. I can imagine it landed as if you did not matter; let's stay with what happened in you when I was not here on time."
      },
      {
        "text": "[Hesitant] Do you think I will ever feel okay, or am I too intense for that?",
        "suggestion": "I do feel hope with you, and I do not think your intensity rules out feeling okay. We can hold that hope lightly enough that it does not become pressure."
      },
      {
        "text": "[Urgent] When you say you care, do you mean only for these fifty minutes? Tell me straight. I can't stand guessing.",
        "suggestion": "My care for you is real, and our contact has limits: I meet you in these sessions and through the arrangements we've agreed on. I won't promise a kind of availability I can't provide. Hearing those limits may feel painful; I want to hear what they bring up for you."
      },
      {
        "text": "[Searching the therapist's face] Have you ever wished I would stop coming? Don't give me a perfect therapist answer.",
        "suggestion": "I want to keep working with you. When our conversations get difficult, I do sometimes feel unsure how best to reach you; that is something for me to work with, not a reason for you to disappear. What were you expecting to hear from me?"
      }
    ],
    "case-david": [
      {
        "text": "[Controlled] When I say convince me, I am watching whether you get defensive.",
        "suggestion": "I notice a pull to prove myself, and I do not want that to take over our conversation. I would rather understand what you need to know about me. What are you watching for?"
      },
      {
        "text": "[Challenging] Do you actually want to work with someone who can sound as arrogant as I do?",
        "suggestion": "Yes, I am willing and engaged in working with you. I feel interested in what is at stake beneath the polish and arrogance; notice which lands first, the interest or the doubt."
      },
      {
        "text": "[Embarrassed] Part of me wants you to be impressed, which is embarrassing to admit.",
        "suggestion": "What I feel most is interest in you, not a need to be impressed. I also appreciate you naming the embarrassing part directly; I am more interested in that honesty than in performance."
      },
      {
        "text": "[Challenging] Be honest—do you think I am the problem in every room I enter?",
        "suggestion": "I do not hold you as the problem. I feel how quickly shame and defense come online for you; we can notice that pattern without making you into the problem."
      },
      {
        "text": "[Dismissive] When you look at me like that, I wonder if you pity me. Do you?",
        "suggestion": "I do not pity you. I do feel concern and respect for how hard it is to let these parts be seen. What happens as I distinguish concern from pity?"
      },
      {
        "text": "[Dismissive] I know I am late again. Work got away from me. Anyway, where should we start?",
        "suggestion": "I am concerned that repeated lateness leaves us less time for the work you came for. I want us to address that rather than brush past it. What gets in the way of arriving on time?"
      },
      {
        "text": "[Wounded but sharp] Do you ever feel ashamed of being wrong, or is that weakness just mine?",
        "suggestion": "I do know shame about being wrong in my own life, and that helps me respect how hot it is for you, not dismiss it as weakness. I am not above you in that struggle."
      },
      {
        "text": "[Dismissive] This is awkward, but do you find me attractive, or do you just see another difficult client?",
        "suggestion": "I will answer carefully: I can see you as an attractive person, and I am not relating to you romantically or sexually. This is a therapy relationship. I also do not see you as just a difficult client; both boundaries matter here."
      },
      {
        "text": "[Curious] Are you married, and would that make you judge my affair?",
        "suggestion": "I keep my relationship details private here, and I am not here to judge you. I am interested in what the affair means and what it costs you; my privacy is not a judgment."
      },
      {
        "text": "[Challenging] Do you actually respect me when you see these parts of me?",
        "suggestion": "I do respect you. Respect is strongest here when the harder parts are visible, not only when you are polished."
      },
      {
        "text": "[Coolly] You say that was hurtful. Is that your professional formulation, or did you actually feel something when I told you?",
        "suggestion": "I did feel sadness hearing how alone you were in that moment. That is my response, not proof of what you should feel. I'm interested in how it is for you to know it affected me."
      },
      {
        "text": "[Controlled, challenging] If you're impressed by me, how can you be objective? If you're not, why should I trust your judgment?",
        "suggestion": "I can appreciate what you've achieved and still question things with you. I notice a pull to prove my judgment here, and I don't want that to get in the way of understanding you. It sounds as though either answer could leave you unsure of me."
      }
    ],
    "case-marcus": [
      {
        "text": "[Flat] When I ask if I am broken, I need to know what you see.",
        "suggestion": "I do not see you as broken. I respect how much you have endured, and I want to understand what living with it is like for you. You do not have to agree with my view."
      },
      {
        "text": "[Slow and flat] When I sit here numb, are you frustrated that I cannot give you more?",
        "suggestion": "Frustration is not what I feel. I feel patient and careful with the pace you need; you do not have to perform feeling for me."
      },
      {
        "text": "[Hesitant] Does this get to you, or do you stay outside it?",
        "suggestion": "It does get to me, and I stay steady on purpose so you do not have to hold it alone. My steadiness is contact, not distance."
      },
      {
        "text": "[Flat] When I barely talk, do you still want me here at all?",
        "suggestion": "I do want you here. I feel glad when you show up, even on days with few words; your presence counts with me before you explain anything."
      },
      {
        "text": "[Hesitant] Are you going to push me into things before I know how to stop?",
        "suggestion": "No, I will not push you into things before you know how to stop. I feel more interested in keeping this tolerable than in going fast. We can check together what pace keeps this workable."
      },
      {
        "text": "[Hesitant] Do you actually think I can change after being like this for years?",
        "suggestion": "I think change is possible, but I cannot promise what it will look like for you. I am willing to work at your pace and look honestly at what helps. How does that sound to you?"
      },
      {
        "text": "[Low voice] Would you tell me if my silence was wasting your time?",
        "suggestion": "If I thought we were missing each other, I would say so with care. I do feel this time matters, even when words are sparse, and we can let that land slowly."
      },
      {
        "text": "[Hesitant] Do trauma stories scare you, or can you stay steady with mine?",
        "suggestion": "Trauma stories affect me, and they do not scare me away. I work to stay grounded with them, and I am steady enough to hear yours at the pace you choose."
      },
      {
        "text": "[Quiet and guarded] Have you actually worked with someone like me, or are you learning on me?",
        "suggestion": "I have worked with trauma and with people who use few words to stay safe. I am always learning, but I am not using you as practice. I have support around this work and will say if we need another resource."
      },
      {
        "text": "[Low voice] Are you okay with silence, or does it make you want to fill it?",
        "suggestion": "I can sit with silence. I often feel close attention in silence, not distance. You can let the silence test that slowly rather than answer right away."
      },
      {
        "text": "[Guarded] Would you tell me if you didn't understand what I meant? People nod. Then it's clear they haven't got it.",
        "suggestion": "Yes. Sometimes I don't understand yet, and I would rather say that and check than give you a polite nod. You can also tell me when I've missed it. It matters that you don't have to guess whether I'm following you."
      },
      {
        "text": "[Flat, watching the therapist] Your eyes went wet. Now I have to worry about you too?",
        "suggestion": "I was moved by what you told me, and I can take care of my reaction. You don't need to look after me. It sounds as though seeing it made this space feel less safe for you."
      }
    ]
  },
  "marker-recognition-chairwork": {
    "case-sara": [
      {
        "text": "[Softly] I keep telling myself that if I were stronger, I would be over him by now. It comes at night when I miss him: normal people move on, you are pathetic for still needing someone who left.",
        "suggestion": "There is a demanding voice here calling the grief pathetic. Can we give that voice this chair and the hurting side the other chair for a few minutes? Sit here as the demanding voice and say the lines directly; then we will move to the side that still misses him and hear what it is like to receive them."
      },
      {
        "text": "[Angry] I keep replaying what I wish I had said when he left. He packed so calmly, like I was already in the past, and I froze. Later I kept hearing: You made me feel disposable.",
        "suggestion": "There is something still unsaid to him about being treated as disposable. If you are willing, let's bring him into the empty chair and start with that one line: 'You made me feel disposable.' We will keep it to one or two lines at a time."
      },
      {
        "text": "[Embarrassed] When I start to cry, I swallow hard and stare at the ceiling until it passes. Then the voice comes in: Stop making a scene, nobody wants to deal with this again.",
        "suggestion": "The tears start to come, and then another side swallows them and calls them a scene. Would you try showing that stopping process from this chair: swallow, look away, and tell her not to cry? Then we will move to the tearful side and let it answer briefly."
      },
      {
        "text": "[Embarrassed] I look at old pictures and tell myself I was too clingy, too dramatic, too much. I zoom in on my own face and make a whole case that he left because loving me became exhausting.",
        "suggestion": "That photo review turns into a harsh case against the part of you that wanted closeness. Would it be okay to give that prosecuting voice one chair and the part that wanted love the other? Start in the prosecuting chair and say the charge directly: 'you were too clingy, too dramatic, too much.' Then we will move to the part hearing it."
      },
      {
        "text": "[Angry] I still replay lunch with my friend, when she said maybe I should just move on. I smiled like I understood, but inside I wanted to say, Stop rushing me, you are making me feel ridiculous for still loving him.",
        "suggestion": "There is a protest to your friend that never got a place to land. If you are willing, let's put her in the empty chair and begin with the line you swallowed at lunch: 'Stop rushing me.' Then we will pause and see what comes next."
      },
      {
        "text": "[Softly] When I start to miss him, I grab my phone and scroll until the feeling goes flat. My thumb just keeps moving, and by the time I look up I can tell myself it was not that important.",
        "suggestion": "The phone becomes the way the missing gets flattened before it can speak. Could we set up two chairs for that? From this chair, show how you scroll the feeling down; then we will move to the missing side and let it say a few words."
      },
      {
        "text": "[Tearful] I keep thinking I ruined the relationship by asking for too much. I replay the night he said he needed space, and then I hear myself saying, You pushed too hard, you should have been easier to love.",
        "suggestion": "A blaming voice is making your need for closeness into proof that you ruined things. Could we give that blaming voice this chair and the needing side the other? Start as the blame and tell her, 'you pushed too hard; you should have been easier to love.' Then we will move to the needing side."
      },
      {
        "text": "[Hesitant] I imagine telling him, You left me alone with all of this, and then I stop myself. My throat closes and I think, Do not send that, do not be pathetic, he already chose to go.",
        "suggestion": "There are words you have not been able to say to him. Would you like to try one sentence with him imagined in the empty chair? If you choose to try, begin with 'You left me alone with all of this,' and we can stop if your throat begins to close."
      },
      {
        "text": "[Anxious] Before a date, I picture him noticing every needy thing about me. I hear, Do not relax, do not text too soon, do not let him see the mess. If he sees it, he will leave too.",
        "suggestion": "The anxious rule-maker is trying to protect you by frightening you before the date even happens. Could we set up two chairs for that? From this chair, give her the rules and predictions; then we will move to the frightened side hearing them."
      },
      {
        "text": "[Tearful] I still want to tell him, You got to leave, but I had to stay in the apartment with every memory.",
        "suggestion": "That line belongs directly with him. If you are willing, let's bring him into the empty chair and say it to him once: 'You got to leave, but I had to stay with every memory.' Then we pause before adding anything more."
      },
      {
        "text": "[Tearful, then sharp with herself] I was doing okay until I found his scarf. Honestly, Sara, get a grip. It's a scarf. Stop being so pathetic.",
        "suggestion": "You were hurting, then you came down hard on yourself for it. Would you try two chairs so we can hear that criticism and what it does to you? If you're willing, use this chair for the voice saying 'get a grip' and picture yourself in the other. Start by saying that criticism directly to her."
      },
      {
        "text": "[Quietly angry] He said we'd talk properly about the breakup. Then he sent a message about collecting his things. I keep rehearsing what I never got to say.",
        "suggestion": "There's something you still need to say to him about how he left. Would it help to try saying it to him here, using that empty chair? If you want to try, picture him there, at a distance that feels right. Begin with 'When you sent that message instead of talking to me…' and tell him what that was like for you."
      }
    ],
    "case-michael": [
      {
        "text": "[Tense and ashamed] Whenever I feel hurt, especially when my wife says I look wounded, my father's words come back: Stop being weak and get control. Then I straighten up and start talking like nothing landed.",
        "suggestion": "Your father's command has become an internal voice that shuts the hurt down. Would you be willing to give that command one chair and the wounded side the other? If you agree, imagine yourself in the other chair. From the command chair, say 'stop being weak and get control' to that hurt side of yourself."
      },
      {
        "text": "[Tense and angry] I still want to tell my father what it cost me when he called every feeling weakness.",
        "suggestion": "That points to unfinished business with your father. If you are willing, put him in this chair and tell him what it cost you to have hurt treated as weakness. I will keep it structured and brief."
      },
      {
        "text": "[Tense] The second I start to soften, I hear, Get it together, and I start listing what I should have done better.",
        "suggestion": "The softer feeling starts to appear, and the command cuts in. Would you try two chairs to see how you stop that feeling? If you agree, picture the softer side of yourself opposite. From this chair, say 'get it together' and tell that side of yourself what he should have done better; then we will move to the softer side."
      },
      {
        "text": "[Ashamed] After I snap, everyone gets quiet, and later I sit in the car calling myself an idiot for losing control again. I do not say it out loud at home, but the words keep going: You are just like him, you never learn.",
        "suggestion": "That car scene turns into an internal attack that leaves you alone with shame. Can we put the attacking voice in one chair and the part that snapped in the other? Start as the attack and say, 'you are just like him; you never learn,' directly to him. Then we will move to the side receiving it."
      },
      {
        "text": "[Tense and angry] I keep imagining my father sitting there with that look on his face after I brought home another trophy. I want to tell him, Nothing I did was ever enough for you, and I am tired of still trying to win.",
        "suggestion": "There is still a direct protest to your father about never measuring up. If you are willing, let's place him in the empty chair and begin with one line: 'Nothing I did was ever enough for you.' We will keep enough contact with the anger and hurt to continue slowly."
      },
      {
        "text": "[Tense] When my wife reaches for me after a fight, I make a joke or start talking about what needs fixing.",
        "suggestion": "The joke and the fixing pull you away just as softness comes close. Would you try two chairs to see how you turn away? If you agree, picture the softer side of yourself opposite and show how you steer him into joking or fixing; then we will move to the softer side and let it answer."
      },
      {
        "text": "[Worried] Before a presentation, I check the deck all night because one mistake would prove I should not be in charge.",
        "suggestion": "The worry keeps you awake by turning one possible mistake into proof that you should not be in charge. Could we give that worry this chair for a few minutes? Tell him exactly what one mistake would prove; then we will move to the pressured side."
      },
      {
        "text": "[Ashamed] The morning after I drink too much, I sit on the edge of the bed and the attack starts before I even remember everything. Pathetic. Weak. Same useless man, just pretending he has control.",
        "suggestion": "That morning-after attack is very direct: pathetic, weak, useless. Can we put that attacking voice in one chair and the ashamed side in the other? Start from the attack chair and say those words to him, so we can hear their impact rather than leave them running inside."
      },
      {
        "text": "[Low voice] I wish I could tell my son I am scared he is learning fear from me. When he flinches at my voice, I want to say, I know that look, and I hate that it is now connected to me.",
        "suggestion": "There is something important you have not been able to say to your son. If you are willing, let's place him in the empty chair and say just the first part: 'I am scared you are learning fear from me.' We will keep it slow enough to stay with the shame and care."
      },
      {
        "text": "[Tense] I start to say sorry, and then a voice says, Do not fold. It tells me that if I soften first, my wife wins and I lose the last bit of respect I have. So I swallow the apology and talk about what she did instead.",
        "suggestion": "The 'do not fold' voice stops the apology by making repair feel like defeat. Would you try two chairs to hear that voice and the side wanting to repair? If you agree, start as the 'do not fold' voice and tell the other side why he must swallow the apology. Then we will move to the side that wanted to repair and hear what gets blocked."
      },
      {
        "text": "[Scowling] My boss said 'good job' and I immediately thought, don't get comfortable. One decent week doesn't mean you're not a screw-up.",
        "suggestion": "Even praise is followed by an attack on yourself. Would you try two chairs to hear that attack and how you receive it? If you agree, take this chair as the voice warning you not to get comfortable, and imagine yourself opposite. Tell him directly, 'One decent week doesn't mean…'"
      },
      {
        "text": "[Voice catches, jaw tightens] I was about to tell my son I missed him. Then I bit down and asked about his homework. You don't dump that stuff on a kid.",
        "suggestion": "You tightened your jaw and stopped the words about missing him. Would you explore that stopping with two chairs? This is about understanding it, not deciding what to say to your son. If you're willing, sit here as the voice that stops you, picture yourself in the other chair, and tell him exactly what he must not say."
      }
    ],
    "case-jason": [
      {
        "text": "[Quietly] I tell myself to keep my head down, because if people really see me they will laugh. In seminars I can feel the warning start before I speak: stay small, do not give them anything to notice.",
        "suggestion": "That warning voice hides you before anyone has a chance to laugh. Would it be okay to give the warning one chair and the exposed side the other? Start as the warning and tell him, 'stay small; don't give them anything to notice.'"
      },
      {
        "text": "[Hesitant] I still wonder what I would say to that friend from school who just stopped talking to me. One week we sat together at lunch, and then he looked past me like I was not there. I never asked why.",
        "suggestion": "That friend is still sitting across from you in the unanswered lunchroom moment. If you are willing, let's put him in the empty chair and begin with the question you never asked: 'Why did you stop talking to me?' We will keep it to a few lines at a time."
      },
      {
        "text": "[Anxious] When I want to join a conversation, my throat tightens and I tell myself to wait for the perfect opening. Then the opening passes, and I feel relieved and humiliated at the same time.",
        "suggestion": "The tightening and waiting stop your wish to join before it reaches the room. If you are willing, let the stopping side take this chair first: make him wait for the perfect opening. Then we will move to the side that wanted to join."
      },
      {
        "text": "[Ashamed] After I say hello awkwardly, I replay it for hours and call myself creepy. It is not just, That was awkward. It becomes, People can tell there is something off about you, and now they know to stay away.",
        "suggestion": "One awkward hello becomes a voice making a whole verdict about you. Can we give that verdict-making voice one chair and the embarrassed side the other? Start here and say the line directly: 'People can tell there is something off about you.' Then we will switch to the side that only tried to say hello."
      },
      {
        "text": "[Quietly] I still remember the table in middle school where those kids laughed every time I talked. I want to ask them, What was so funny about me? I never asked; I just learned to speak less.",
        "suggestion": "Those classmates still hold the question that made you speak less. If you are willing, let's place them in the empty chair and ask it directly, slowly: 'What was so funny about me?' Then we pause before you add anything more."
      },
      {
        "text": "[Hesitant] When someone compliments me, I shrug and point out the awkward part before they can. It is like I have to get there first: Yeah, but I sounded weird at the end, so please do not look too closely.",
        "suggestion": "You get to the criticism first so the compliment cannot reach you. Could we set up two chairs? From this chair, show how you shrug, deflect, and point out the awkward part; then we will move to the side that might want to receive it."
      },
      {
        "text": "[Worried] Before a group event, my mind starts listing every way I could humiliate myself. It shows me standing alone, saying the wrong thing, laughing too late, everyone noticing. By the time I get there, I am already trying not to be seen.",
        "suggestion": "The worry floods you with humiliation scenes before you even arrive. Would you be willing to give that worry a chair? Let it list the feared moments directly; then we will move to the part that has to walk into the room after hearing them."
      },
      {
        "text": "[Ashamed] When I do not get invited, I tell myself nobody wanted me there anyway. Then I act like I did not care, but inside I keep saying, See, this is what happens when people have a choice about you.",
        "suggestion": "Not being invited turns into an internal verdict before the hurt can speak. Can we put the verdict voice in one chair and the hurt side in the other? From this chair, say, 'this is what happens when people have a choice about you'; then we will switch so the hurt side can answer."
      },
      {
        "text": "[Hesitant] I want to tell my old friend, You disappeared and I never knew why. I still remember checking messages and pretending I was fine at school. Part of me thinks it is stupid to care now, but another part still wants an answer.",
        "suggestion": "The old disappearance still has no answer, and a younger part of you is still checking for one. If you are willing, let's place him in the empty chair and start with, 'you disappeared and I never knew why.' Then we will pause and see what the younger part still needs to say."
      },
      {
        "text": "[Anxious] When I want to ask a question in class, I stare at my notes until the chance passes. I know the question is probably normal, but I make myself look busy until the professor moves on.",
        "suggestion": "That busy-looking silence stops the question before it enters the room. Could we use two chairs for a short round? From this chair, show how you keep him looking down and silent; then we will move to the side that wanted to ask."
      },
      {
        "text": "[Looking down] I answered one question at lunch and stumbled over a word. All the way home it was, 'You sounded stupid. Why can't you just talk normally?'",
        "suggestion": "You're speaking to yourself very harshly about that one word. Would you try two chairs to hear those words and how they affect you? If you're willing, sit here as the voice saying you sounded stupid, and picture yourself in the other chair. Say the first sentence directly to him; we can go slowly."
      },
      {
        "text": "[Hesitant, hurt] My old friend used to joke about how quiet I was. I laughed too. I still want to tell him it wasn't funny, but I never did.",
        "suggestion": "You still have something to say to him about those jokes. Would you try telling him here, with that empty chair standing in for him? If you want to, picture him there and begin with 'When you joked about how quiet I was…' Tell him what you didn't get to say then."
      }
    ],
    "case-laura": [
      {
        "text": "[Flat and guarded] When my husband left, I thought, of course he did. Who would stay with someone this damaged?",
        "suggestion": "The divorce becomes a harsh verdict that says you are too damaged to stay with. If it feels safe enough, can we give that verdict one chair and the side carrying it the other? Start from the verdict chair and say, 'you are too damaged for anyone to stay.' Then we will move to the side carrying it."
      },
      {
        "text": "[Distant] I never said to my mother, You saw what was happening and kept washing dishes. I still think about that more than I want to.",
        "suggestion": "Your mother is there in the kitchen scene, seeing and still washing dishes. If you are willing, let's bring her into the empty chair and say the sentence directly: 'You saw what was happening and kept washing dishes.' We go slowly and stop wherever you need."
      },
      {
        "text": "[Tense and tearful] When my ex moved out, I did not cry. I cleaned the kitchen and felt nothing, like I should have been hurt but I was just blank.",
        "suggestion": "The cleaning and blankness seem to stop the hurt before it reaches you. Would you look at that stopping with two chairs, without pushing past it? If you choose to try, give the blocking side one chair and the hurt side the other. From the blocking chair, show how you go blank and keep cleaning. Then we will move to the hurt side and let it have only a few words."
      },
      {
        "text": "[Distant] I keep wondering whether my ex knew what would happen after he left, that I would turn it all back on myself. I want to ask him, Did you know I would carry the blame for both of us?",
        "suggestion": "He is the person you want to ask about being left with all the blame. Would you like to try asking him using the empty chair? If you choose to try, imagine him at a distance you choose and ask: 'Did you know I would carry the blame for both of us?' We can pause after that."
      },
      {
        "text": "[Flat and guarded] I still tell myself I am damaged goods. It comes up when someone is kind to me or when I think about dating again. I hear, They would leave if they knew enough, so do not let anyone get too close.",
        "suggestion": "The 'damaged goods' voice warns you away from closeness before anyone can choose you. Would you try two chairs, one for that voice and one for the side hearing it? We can stop at any point. If you agree, from the first chair, say, 'they would leave if they knew enough'; then we will switch and hear what it is like to receive that warning."
      },
      {
        "text": "[Slow and flat] When anger starts, I wipe the counter, check the locks, or pour a drink until the feeling disappears. I do not decide to stop it; I just become busy and far away before it has words.",
        "suggestion": "The wiping, checking, and pouring are how the anger gets carried away before it can speak. Would you try two chairs to see how you move away from the anger? If you choose to try, give the busy side one chair and the anger the other. From the first chair, show how it makes the anger disappear. Then we will move to the anger side and give it a few words without forcing it."
      },
      {
        "text": "[Ashamed] I tell myself I should have known better than to trust him. I go over little signs I ignored and make a case against myself, like I was stupid for wanting to believe he was safe.",
        "suggestion": "The blame is building a case against the part that wanted safety. Would you try two chairs to hear that blame and its impact? If you choose to try, picture the trusting side of yourself opposite. From the blaming chair, say: 'you should have known better; you were stupid to trust him'. Then we will switch to the trusting part that got hurt."
      },
      {
        "text": "[Low voice] I never told the man who hurt me, You do not get to decide what I am worth.",
        "suggestion": "That is unfinished business with the person who hurt you. Would you try that one sentence with him imagined in the empty chair? You can choose the distance and stop at any point. If you want to try, picture him there and say only the words you just used."
      },
      {
        "text": "[Tense and ashamed] When I start to say I am angry, I hear, Do not make trouble. My shoulders go tight, my voice gets polite, and suddenly I am explaining why it was probably not a big deal.",
        "suggestion": "The 'do not make trouble' voice stops anger before it has a chance to stand up. Would you try two chairs, one for that warning and one for the anger? If you agree, start as the warning voice and tell the angry side why she must not speak. Then we will move to the angry side and hear one or two plain sentences."
      },
      {
        "text": "[Distant] I still picture my bedroom door after it happened, waiting to hear my mother come down the hall. She never did. I want to ask her, Why did you never come to my room afterward?",
        "suggestion": "Your mother is missing from the hallway after it happened, and the question is still there. Would you try asking her using the empty chair? If you want to, picture her at a distance you choose and begin with 'Why did you never come to my room afterward?' We can stop after that one sentence."
      },
      {
        "text": "[Eyes moisten; presses lips together] No. Not this. If I start wanting someone here, I won't be able to stop. Just swallow it. Go blank.",
        "suggestion": "You press your lips together and tell yourself to go blank just as the wanting appears. Would you be willing to look at that stopping with two chairs, without pushing past it? If you choose to try, sit here as the voice telling you to swallow it, picture yourself opposite, and say only that first instruction to her. We can stop there."
      },
      {
        "text": "[Low, bitter] He thanked me for being 'so reasonable' about the divorce. I wanted to tell him I wasn't fine. I was just too tired to argue.",
        "suggestion": "There are words he hasn't heard about what being 'reasonable' cost you. Would you try saying them to him using the empty chair? If you're willing, picture him there at a comfortable distance. Start with 'When you thanked me for being reasonable…' and tell him how it actually was for you."
      }
    ],
    "case-carlos": [
      {
        "text": "[Angry, clenching fists] After I punched the wall, I kept thinking, What kind of man scares his own family? I saw my son's face and then the attack started, like there was no father left, only some dangerous man in the kitchen.",
        "suggestion": "The wall punch turns into an attack on the father in you. Would you try two chairs to hear the blame and its impact? This does not excuse frightening your family. If you agree, picture yourself opposite and, from the blaming chair, say: 'what kind of man scares his own family?' Then we will switch and hear what that does to him."
      },
      {
        "text": "[Tense and angry] I still want to tell my father the belt did not make me a man. It just made me scared of him.",
        "suggestion": "Your father belongs in the empty chair for that line about the belt and fear. If you are willing, let's put him there and begin directly: 'The belt did not make me a man. It made me scared of you.' We will keep it to a few strong lines at a time."
      },
      {
        "text": "[Tense and ashamed] I start to say sorry to my son, and my mouth shuts. I think, don't show weakness, and my face goes hard.",
        "suggestion": "The apology starts, and the hard face closes over it before it reaches your son. Would you be willing to set up two chairs? If you agree, picture the side wanting to repair in the other chair. From this chair, tell that side of yourself not to show weakness and argue for staying hard; then we will move to the father who wanted to repair."
      },
      {
        "text": "[Ashamed] After I yell, I call myself a monster and then get angry at myself for thinking that. Everyone goes quiet, I hear that word in my head, and then another part snaps back, Stop whining and fix it.",
        "suggestion": "After the yelling, the word 'monster' becomes an attack inside you. Can we put the monster-calling voice in one chair and the part hit by it in the other? Start as the attacking voice and say the word directly; then we will let the attacked side answer."
      },
      {
        "text": "[Tense and angry] I want to tell my father, I was a kid, not one of your soldiers. He made me stand straight and take it, and even now I feel my back lock before I can say how scared I was.",
        "suggestion": "That is unfinished business with your father around how he treated you. If you are willing, we can place him in the empty chair and have you say that line directly, with me helping keep it contained."
      },
      {
        "text": "[Tense] When my voice shakes, I cough, sit up straighter, and make my face hard. I can almost hear my father saying, Do not let them see you like that, so I turn it into a stare.",
        "suggestion": "The hard face turns the shaking into something no one can see. Would you try two chairs to see how you stop the shaking? If you agree, give the hard-faced side one chair and the shaking side the other. From the first chair, harden the face and say, 'do not let them see you like that'; then we will move to the side that was shaking."
      },
      {
        "text": "[Worried] If I let my son talk back once, I imagine losing all respect in the house. First he rolls his eyes, then my wife sees I have no authority, then nobody listens and I am nothing there.",
        "suggestion": "The worry turns one eye roll into the whole house losing respect for you. Could we put the worry in one chair and let it predict the chain out loud? Start with the eye roll, then your wife seeing no authority; after that we will switch and hear from the father under that pressure."
      },
      {
        "text": "[Defensive] I tell myself only losers need help with anger. Then I think of my father laughing at a man who could not control his house, and I hear that same laugh in my head when my wife says therapy might help.",
        "suggestion": "Your father's laugh has become a voice that makes help feel humiliating. Can we put that voice in this chair and let it say, 'only losers need help,' in his tone? Then we will switch to the side that wants something different for your family."
      },
      {
        "text": "[Low voice] I wish I could tell my wife I get scared when she looks at me like she is afraid.",
        "suggestion": "That sentence belongs directly with your wife, where the fear between you can be named. Would you try saying it with her imagined in the empty chair? If you agree, picture her there and begin slowly with: 'I get scared when you look afraid of me,' without forcing more than one or two lines."
      },
      {
        "text": "[Tense and angry] When tears come up, I clench my jaw and turn them into heat before anyone can see. If the anger is there, nobody asks what hurt. They just back up, and that feels safer.",
        "suggestion": "The tears get converted into heat before anyone can reach the hurt. Could we put that converting side in this chair first? Show how you clench, heat up, and make people back up; then we will move to the tearful side."
      },
      {
        "text": "[Disgusted with himself] She had to check my face before asking for a lift. Great father you are, Carlos. Your own kid is scared to ask you anything.",
        "suggestion": "You're attacking yourself about the fear you saw in her. Would you try two chairs to hear that attack and what happens when you receive it? Understanding this doesn't take away your responsibility to her. If you agree, sit here as the voice saying 'great father you are,' picture yourself opposite, and say those words directly to him."
      },
      {
        "text": "[Tense, hurt] My old supervisor joked that I'd never be more than a pair of hands. I still hear it when I have to lead a meeting. I never told him how much it got to me.",
        "suggestion": "His words still get to you, and there is something you never told him about their impact. Would you try saying it to him with the empty chair? If you're willing, picture him there at a distance you choose. Begin with 'When you called me just a pair of hands…' and tell him what you needed him to hear."
      }
    ],
    "case-nina": [
      {
        "text": "[Tired] The divorce is probably my fault. I keep hearing this list: you should have been sweeter, calmer, easier, less exhausted. If you had not needed so much, maybe he would not have left.",
        "suggestion": "That voice turns exhaustion and need into evidence that the divorce was your fault. Can we put that blaming rule in one chair and the exhausted side in the other? Start as the blame and tell her she should have been sweeter, calmer, and needed less. Then we will move to the exhausted side."
      },
      {
        "text": "[Apologetic] I keep thinking of what I never said to my ex: You left me carrying everything, then blamed me for being tired.",
        "suggestion": "I hear unfinished business with your ex around carrying too much and then being blamed for exhaustion. Would it be okay to use the empty chair? Place him here and tell him that exact sentence first, then what it cost you to swallow it."
      },
      {
        "text": "[Guilty] When I feel angry about being needed, I immediately think I am a bad person. Then I smile and ask what else they need.",
        "suggestion": "The bad-person message stops anger and sends you back into caring. Could we use two chairs to make that sequence visible? From this chair, tell her she is bad for feeling angry; then we will move to the anger that never gets a turn."
      },
      {
        "text": "[Tired] I tell myself a good mother would not want an hour where nobody needs her. When I close the bedroom door, the rule starts up: selfish, lazy, what kind of mother hides from her own family?",
        "suggestion": "The good-mother rule attacks the need for rest as soon as the door closes. Can we put that rule in one chair and the exhausted side in the other? First let the rule say, 'selfish, lazy, what kind of mother hides?' Then we will switch and hear the tired side."
      },
      {
        "text": "[Apologetic] I want to tell my mother, I was the child; you were supposed to notice me. When she talks now about how lonely she is, I want to say, I was lonely too, but then I feel cruel.",
        "suggestion": "Your mother is the one who needs to hear that child part. If you are willing, we can bring her into the empty chair and begin with, 'I was the child; you were supposed to notice me,' just a few words at a time."
      },
      {
        "text": "[Torn] When anger rises, I smile and ask what everyone wants for dinner. It happens so fast that I barely notice the anger until later, when I am wiping the counter too hard and imagining what I wish I had said.",
        "suggestion": "The caretaking move covers the anger before you can even hear it. Could we give that covering-over side this chair? Show how you smile, ask about dinner, and keep the house running; then we will move to the anger for one plain sentence."
      },
      {
        "text": "[Guilty] If dinner is not ready, I call myself useless. I can have worked all day, answered everyone's messages, helped the boys, and still one missed thing becomes proof that I am failing at the only job that matters.",
        "suggestion": "The missed dinner becomes a voice saying your whole worth depends on constant care. Would you try two chairs, one for the 'useless' voice and one for the tired side? If you agree, from the first chair, tell her the missed dinner proves she is failing; then we will switch and hear from the exhausted side carrying so much."
      },
      {
        "text": "[Tearful] I still want to tell my ex, You left and somehow I am the one still apologizing. I handle the forms, the boys, the messages, and I still hear myself explaining why I am not doing enough.",
        "suggestion": "The apology you are still carrying is directed toward your ex. Would you try saying it with him imagined in the empty chair? If you want to, picture him there and begin with: 'You left, and somehow I am the one still apologizing.' Then we pause and notice what it brings up."
      },
      {
        "text": "[Apologetic] I try to say no, then explain until the no turns into yes. I start with, I can't today, and before they even argue, I am listing reasons, softening my voice, and offering another way to help.",
        "suggestion": "The explanation softens the boundary until the no disappears. Can we use two chairs for that? From this chair, show how you explain and turn the no into yes; then we will move to the side that wanted the no to hold."
      },
      {
        "text": "[Worried] When I rest, my mind lists everyone who might fall apart without me. It starts with my mother needing a ride, then the boys forgetting something, then the house becoming chaos, and suddenly sitting still feels like negligence.",
        "suggestion": "The worry makes rest feel like negligence by showing everyone falling apart. Would you be willing to give that worry this chair? Let it list the feared consequences; then we will move to the exhausted side trying to rest under that pressure."
      },
      {
        "text": "[Tears rise; gives a quick smile] I was going to say I'm angry with her. No, that's not fair. Smile, Nina. She's got enough to deal with. Don't make it worse.",
        "suggestion": "You started to feel anger, then smiled and told yourself to stop. Would you explore that stopping with two chairs so we can understand what it does? If you're willing, sit here as the voice saying 'don't make it worse,' picture yourself in the other chair, and tell her what she's not allowed to express."
      },
      {
        "text": "[Quietly resentful] The headteacher thanked me for 'never saying no.' I wanted to tell her it wasn't a compliment. I'd been asking for help all term. I still go over what I should have said.",
        "suggestion": "You still have words for her about how that praise missed your need for help. Would you try saying them with her imagined in the empty chair? If you're willing, picture her there and begin with 'When you thanked me for never saying no…' Tell her what you needed her to understand."
      }
    ],
    "case-aisha": [
      {
        "text": "[Desperate] If someone does not answer, my mind goes straight to them being with someone better, posting it, everyone seeing I got replaced. Then I have to cut them off first.",
        "suggestion": "The worry is doing something very active here: it shows you replacement scenes until cutting them off feels safer than waiting. Can we use two chairs to see how that worry works? From this chair, tell her each scene the worry predicts; then we will switch to the side that has to hear it."
      },
      {
        "text": "[Furious] I still picture my ex in bed with someone else. I hate him, and then I hate myself for still wanting him.",
        "suggestion": "There is unfinished business with him: the image, the rage, and the longing are still in the room with you. If you are willing, we can place him in the empty chair so the words go to him instead of turning back on you. Start with, 'I still see you with her...'"
      },
      {
        "text": "[Fearful and ashamed] After everything that happened to me, I call myself dirty and impossible to love. When someone touches me kindly, the first voice says they would leave if they knew the whole story.",
        "suggestion": "The attack calls you dirty for what was done to you, and that leaves the wounded side alone with the shame. Would you try two chairs to hear that attack and its impact, one sentence at a time? We can stop at any point. If you choose to try, give the attack one chair and the hurt side the other. First let the attack say its exact words; then we will switch and hear the side that has carried them."
      },
      {
        "text": "[Ashamed] After I text someone too many times, I call myself crazy and disgusting. I delete the thread, then reopen it, then tell myself no normal person would need proof this badly. The attack feels almost safer than waiting.",
        "suggestion": "The attack tries to control the panic of waiting by turning on you first. Would you be willing to slow that down in two chairs? From this chair, let the attacking voice say what it calls you after the texts; then we will switch to the frightened side in small, supported steps."
      },
      {
        "text": "[Furious] I still want to say to my mother, You left me with people who hurt me. I was a kid, and you kept choosing them, then acting shocked that I was angry.",
        "suggestion": "There is unfinished business with your mother around being left unprotected and then having your anger treated as the problem. Would you try one sentence to her using the empty chair? You can choose the distance and stop. If you want to try, picture her there and begin with 'You left me with people who hurt me,' and we will pause after that."
      },
      {
        "text": "[Panicked] When I feel myself needing someone, I start accusing them before they can leave. I hear myself saying, Fine, go then, you never cared anyway, even while another part is begging them not to go.",
        "suggestion": "The accusing part moves first so the need is not left exposed. Can we use two chairs to see that protection in action? From this chair, say 'go then, you never cared' directly to the needing side; then we will switch and hear the side that was begging them to stay."
      },
      {
        "text": "[Worried] If you do not answer, my head shows me ten scenes where I am replaced and everyone knows. It goes from one quiet phone to you deciding I am too much, then everyone agreeing I was always too much.",
        "suggestion": "The worry takes one quiet phone and builds a whole replacement story, until your system is flooded. If you are willing, we can give the worry one chair and the flooded side the other. Sit here as the worry and show the scenes one at a time; then we will switch and hear what it is like to receive them."
      },
      {
        "text": "[Low voice] I never got to tell the person who hurt me, You do not get to make me dirty. The words catch because part of me imagines him laughing, but another part still wants to say them to his face.",
        "suggestion": "That is unfinished business with the person who hurt you. If you choose to try it, we go very slowly: place him in the empty chair and say only that line first, while we keep your feet in the room and your choice intact."
      },
      {
        "text": "[Ashamed] When I want closeness, I call myself pathetic before anyone else can. If I miss someone, I tell myself to shut up, stop begging, stop acting like a child. It is like I attack the need before the other person gets the chance.",
        "suggestion": "The self-attack gets to the longing before anyone else can reject it. Could we make that attack visible in two chairs? First let the attacking voice say, 'stop begging, stop acting like a child,' directly to the longing side; then we will switch so the longing is not left alone with it."
      },
      {
        "text": "[Tearful] When grief starts to show, I laugh too loudly and say, Forget it, this is stupid. Then I make a joke about being dramatic, and the crying part goes quiet like it got slapped.",
        "suggestion": "The mocking voice shuts the grief down before it can be seen. Would you be willing to let that side take this chair first, just briefly? Say 'forget it, this is stupid' to the crying side; then we will switch and give the grieving side a few protected words."
      },
      {
        "text": "[Angry with herself, crying] I asked her to stay and then called her selfish. You ruin everything, Aisha. Nobody can stand you for long.",
        "suggestion": "You're hurting, and you're attacking yourself as someone nobody can stand. Would you try two chairs to hear that attack and its impact, one sentence at a time? We can stop if it becomes too much. If you're willing, sit here as the voice saying 'you ruin everything,' picture yourself opposite, and say that one sentence directly to her."
      },
      {
        "text": "[Trembling] My foster mum said I was family. Then they moved me. I want to ask her why she let me believe it, but even picturing her makes me shake.",
        "suggestion": "There is a painful question you never got to ask her, and even imagining her feels like a lot. We don't have to do this now. Would trying one sentence toward an empty chair feel manageable, if you choose the distance and can stop at any point? If yes, picture her only as clearly as feels safe and begin, 'When you told me I was family…'"
      }
    ],
    "case-david": [
      {
        "text": "[Self-blaming] If I am not exceptional, I tell myself there is no reason anyone would stay. Ordinary means replaceable. Replaceable means I have already lost; they just have not said it out loud yet.",
        "suggestion": "The demand makes your worth depend on being exceptional, and it treats ordinary as if abandonment has already begun. Could we put that demand in one chair and the side paying the price in the other? From this chair, make the case that ordinary means replaceable; then we will switch and hear the impact."
      },
      {
        "text": "[Dismissive] My wife says she might be done, and I tell myself only an idiot destroys his own family and still expects sympathy.",
        "suggestion": "There is a harsh blaming voice turning the marriage pain into proof that you deserve no sympathy. Would you try two chairs to hear that attack and its impact? If you agree, picture yourself in the other chair. From the attacking chair, tell that side of yourself he is an idiot who destroyed his family; then we will switch and hear what that does to him."
      },
      {
        "text": "[Wounded but sharp] I hate how my father made everything a performance, but the second I say that I start defending him: he pushed me because he believed in me.",
        "suggestion": "A defending side steps in as soon as anger toward your father appears, so the anger loses its voice. If you are willing, give that defender this chair first: explain him and tell David why he should not be angry. Then we will move to the anger side and let it answer without debating."
      },
      {
        "text": "[Dismissive] I tell myself mediocre men lose their families and deserve it. The word mediocre is worse than cruel; it means I became ordinary, replaceable, the kind of man nobody has a reason to choose.",
        "suggestion": "That sounds like a harsh self-evaluative voice tying your worth to exceptional performance and using mediocrity as a sentence. Would you give that voice one chair and the side it attacks the other? If you agree, from the first chair, say exactly why mediocre men deserve to lose; then we will switch and let the attacked side respond."
      },
      {
        "text": "[Controlled] I want to tell my father, I was your son, not a project. I still hear him reviewing my grades, my posture, my handshake, like everything about me was something to optimize. I never got to ask whether he ever saw me.",
        "suggestion": "That is unfinished business with your father around being treated as a performance project rather than a son. If you are willing, we can place him in the empty chair and let you say the first line directly: 'I was your son, not a project.' Then we can pause and see whether the question about being seen wants to follow."
      },
      {
        "text": "[Controlled] When shame rises, I start listing achievements until I cannot feel it. I go through revenue numbers, promotions, things people envy. It works for a minute, but then I am alone with the same hollow feeling and even more contempt for needing the list.",
        "suggestion": "The achievement list interrupts the shame before it can be felt, and then the shame comes back with contempt added. Would it be okay to use two chairs? From this chair, list the achievements and make the case for blocking the shame; then we will switch and hear from the shamed side left after the list runs out."
      },
      {
        "text": "[Worried] If I admit one mistake, I picture everyone deciding I am a fraud. It does not stop at the mistake; it becomes the board losing confidence, my wife saying she knew it, people realizing the whole image was fake.",
        "suggestion": "The worry turns one mistake into total exposure, as if the whole image could collapse at once. Can we give that worry one chair so you can hear how it pressures you? Let it predict exactly what happens if you admit one error; then we will switch to the side living under those scenes."
      },
      {
        "text": "[Low voice] I want to tell my wife I am terrified she finally sees the real me. After our last argument she looked at me like the performance was over, and I wanted to say, Please do not decide this is all I am.",
        "suggestion": "There is unfinished business with your wife around being seen without the performance and fearing she will leave. If you are willing, we can bring her into the empty chair and let the words go directly to her: 'Please do not decide this is all I am.' Then we pause before any defense comes in."
      },
      {
        "text": "[Ashamed] I tell myself the affair proves I am trash. Not just that I did something destructive, but that underneath the title, the money, all of it, this is who I actually am. Then I hate myself for sounding dramatic.",
        "suggestion": "That is a severe self-attack around the affair, turning behavior into a verdict on your whole self. Would you try two chairs, one for the voice saying 'trash' and one for the ashamed side? Understanding the attack does not excuse the affair. If you agree, from the first chair, let the attack say the whole verdict; then we will switch so you can hear and answer it rather than only endure it."
      },
      {
        "text": "[Dismissive] When sadness comes up, I analyze everyone's tone until the feeling is gone. I can turn a conversation with my wife into a transcript in my head, finding inconsistencies, proving my point, and by then the tightness in my throat is gone.",
        "suggestion": "The analysis moves you into a courtroom before sadness can speak, so the tightness disappears without being heard. Would you be willing to make that interruption concrete? From this chair, analyze her tone and move him away from the tightness; then we will move to the sadness and let it say a few direct words."
      },
      {
        "text": "[Coldly, looking away] I almost cried when she said she missed the old me. Then: enough. Get your face under control. Don't make yourself small in front of her.",
        "suggestion": "You stopped the tears by ordering yourself to get your face under control. Would you try two chairs to understand that command and its effect, without requiring yourself to cry? If you're willing, take this chair as the voice giving the order, picture yourself opposite, and tell him directly what he must not show."
      },
      {
        "text": "[Precise, jaw tight] My father called my promotion 'a decent start.' He always did that. There's still a speech in my head about what it took to get there. He'll never hear it now.",
        "suggestion": "You still want him to hear what your achievement cost you and how his response landed. Would you try speaking to him in the empty chair so those words have somewhere to go here? If you agree, picture him there at a distance you choose. Start with 'When you called it a decent start…' and tell him what you didn't get to say."
      }
    ],
    "case-marcus": [
      {
        "text": "[Furious] My father had his own damage, I know that. But I still hate him for bringing violence into our house and leaving us to live with it.",
        "suggestion": "There is unfinished business with your father: you understand what he carried, and you still hate the violence he brought into the house. If you are willing, we can bring him into the empty chair and let both parts go directly to him. Start with, 'I know you had damage, and I hate what you brought home.'"
      },
      {
        "text": "[Low voice] They locked me in the closet, and I still think I must have been impossible, or they would not have done it.",
        "suggestion": "The blame turns what was done to you into a verdict on the child who was locked in. Would you try two chairs to hear the blame and how it affects you? We can stop at any point. If you choose to try, imagine that younger side of yourself opposite and, from the blaming chair, tell him he must have been impossible; then we will switch and hear from the child who had no way out."
      },
      {
        "text": "[Furious] Even in here, imagining telling that foster father I hate him makes my jaw lock. I hear, Don't say that. Don't make it worse.",
        "suggestion": "The jaw locks the anger before it can reach him, as if expression would make danger return. If you are willing, let the locking side take this chair first: say 'don't say it, don't make it worse' directly to him. Then we will move to the anger side for a few controlled words."
      },
      {
        "text": "[Flat] I tell myself I should be over it by now; other people had it worse and still function. When I cannot sleep or fill out paperwork, the voice says I am using the past as an excuse.",
        "suggestion": "The dismissing voice uses comparison to make the impact of trauma sound like an excuse. Would you give that dismissing voice one chair and the side living with the trauma the other? You can stop. If you choose to try, start as the dismissing voice: tell him he should be over it by now and that others function better."
      },
      {
        "text": "[Low voice] I want to ask my foster mother why nobody came when I knocked. I remember keeping it quiet at first, then knocking harder, then stopping because I figured I was making it worse. I never got to ask if she heard me.",
        "suggestion": "That sounds like unfinished business with your foster mother around being left alone and unheard. If you are willing, we can put her in the empty chair and let you ask the question directly: 'did you hear me knocking?' We will keep it slow, with pauses, so you choose how much to say."
      },
      {
        "text": "[Quiet and guarded] When my voice shakes, I stop talking and stare at the floor. It is like a hand comes over my mouth from the inside: Do not give them more. Do not make it worse.",
        "suggestion": "The inner hand over the mouth stops the shaking voice before anyone gets more access. Would you try two chairs to see how you stop yourself from speaking? If you choose to try, imagine the part of yourself wanting to speak in the other chair. From the stopping chair, tell him 'do not give them more'; then we will move to the shaking voice for a few words."
      },
      {
        "text": "[Worried] If I sleep deeply, I worry I will wake up back there and not know where I am. So I keep the TV on and make myself stay half-alert, like the worry is standing guard.",
        "suggestion": "The worry is standing guard by keeping sleep dangerous and keeping you half-alert. Would you be willing to put that guard in this chair for a short round? Let it warn you about sleep and what could happen; then we will switch and hear from the exhausted side."
      },
      {
        "text": "[Furious] I still want to tell my father, You brought the war home and made us live inside it. He would talk about what happened to him like it explained everything, but I was the one listening for his boots at night.",
        "suggestion": "There is unfinished business with your father around violence and fear in the home. If you choose to try it, we can bring him into the empty chair and let the sentence go to him, not just stay inside you: 'You brought the war home.' Then we pause and keep you grounded."
      },
      {
        "text": "[Ashamed] Needing help makes me tell myself I am useless. If I cannot handle paperwork, sleep, phone calls, normal things, then I hear, What are you even good for? So I stop asking and let things pile up.",
        "suggestion": "The self-attack turns needing help into proof that you are useless, and then asking goes silent. Would you try two chairs, one for the attack and one for the side needing help? We can stop at any point. If you agree, from the first chair, say 'what are you even good for?'; then we will switch and let the needing side answer without being pushed."
      },
      {
        "text": "[Tense and guarded] When my sister asks about the past, I hear, Shut it down, and I change the subject.",
        "suggestion": "The 'shut it down' voice cuts contact with the past as soon as your sister asks, before anything vulnerable can appear. Could we use two chairs for a short round? From this chair, say 'shut it down' and show how you change the subject; then we will move to the side that was being asked."
      },
      {
        "text": "[Flat, fists closed] I survived. He didn't. That's the fact. And every time I sleep okay, it's: you don't deserve that. You left him there.",
        "suggestion": "You turn surviving, and even sleeping, into an accusation against yourself. Would you try two chairs to hear that accusation and its impact without going through the event? We can stop at any point. If you're willing, sit here as the voice saying 'you don't deserve that,' picture yourself opposite, and say only that sentence to him."
      },
      {
        "text": "[Voice catches, stares at the floor] There it is. Shut it down. Tighten everything. If I let that sadness out, I won't get it back in.",
        "suggestion": "You tighten your body to stop the sadness from coming out. Would you explore just that stopping with two chairs, without asking yourself to release all the sadness? If it feels manageable, sit here as the voice saying 'shut it down,' picture yourself in the other chair, and give him that one instruction. We can pause immediately if needed."
      }
    ]
  },
  "alliance-repair": {
    "case-sara": [
      {
        "text": "[Embarrassed] Sometimes I think you get bored when I repeat the breakup again, and then I feel stupid for still bringing it here.",
        "suggestion": "Thank you for telling me. You worry that I am bored, and then feel ashamed of bringing the grief here. I want to understand when you lose the sense that I am listening. What have you noticed in those moments?"
      },
      {
        "text": "[Embarrassed] When you asked about work again, I felt like you did not get how much this hurts. I know I have to function, but in that moment it sounded like you wanted the practical version of me back too soon.",
        "suggestion": "My question about work made you feel I was moving past the pain too quickly. I am sorry. We can leave work aside for now. What do you need me to understand about how much this hurts?"
      },
      {
        "text": "[Anxious] When I apologized for crying, your silence made me worry I was too needy for therapy. I started scanning your face, trying to work out whether I should pull myself together before you got tired of me.",
        "suggestion": "My silence left you wondering whether your tears were too much for me. I am sorry. I can let you know I am listening instead of leaving you to read my face. Would that help when the tears come?"
      },
      {
        "text": "[Embarrassed] When you keep calling it grief, I feel like you have already decided what this is. Some of it is grief, but some of it is anger, humiliation, missing him, and feeling foolish, and I do not want it flattened.",
        "suggestion": "I kept using \"grief\" when you were telling me there was more to it. I am sorry. I can set that word aside and listen to the anger, humiliation, and missing him without deciding it all means one thing."
      },
      {
        "text": "[Tearful] Last session ended while I was still crying, and I walked to the car feeling dropped. I know time was up, but I kept thinking I should not have let myself get that open so close to the end.",
        "suggestion": "We ended while you were still crying, and you felt dropped. I am sorry. We can leave some time before the end to check how you are and what you need for the next part of your day. How would that be for you?"
      },
      {
        "text": "[Hurt] When you asked whether I had thought about dating again, it felt like you wanted me to move on already.",
        "suggestion": "My question about dating made you feel rushed past the grief. I am sorry. We can set that question aside. What do you need me to understand about where you are now?"
      },
      {
        "text": "[Quietly] You mixed up his name last week, and I felt silly for caring so much. But his name is still everywhere in my head, so when you got it wrong, it felt like the relationship became less real here too.",
        "suggestion": "I got his name wrong, and something important to you felt less real here. I am sorry. You should not have to repair that for me. I will be more careful with his name; is there more about that moment you want me to hear?"
      },
      {
        "text": "[Embarrassed] When I admitted I checked his profile, your face looked disappointed, and I wanted to take it back. I came here because I am already ashamed of doing it, so that look made me want to hide.",
        "suggestion": "You saw disappointment in my face and wanted to hide what you had just told me. I am sorry my expression had that effect. I want to understand what checking his profile is like for you. What did you need from me then?"
      },
      {
        "text": "[Anxious] When you asked who else supports me, it sounded like you were trying to pass me off to someone else.",
        "suggestion": "My question about support sounded like I wanted to send you elsewhere. I am sorry. I was asking who you can turn to between sessions. I want us to discuss that together, with room for what you need from me too."
      },
      {
        "text": "[Softly] When you look down at your notes while I talk about him, I feel like you leave for a second.",
        "suggestion": "My note-taking pulled my eyes away at a tender moment, and I am sorry it felt like I left. Would it help if I asked before writing, or paused the writing when you are in the most painful parts?"
      },
      {
        "text": "[Hurt, hesitant] You called it 'checking up on him.' That makes me sound nosy. I was trying to see whether any of it mattered to him.",
        "suggestion": "'Checking up on him' missed what you were reaching for and left you feeling judged. I'm sorry. You wanted some sign that it mattered to him too. Is that closer to what you were trying to tell me?"
      },
      {
        "text": "[Quietly] Every time I say I had a nice day, you ask where the sadness is. It makes me feel like you don't believe me when I'm okay.",
        "suggestion": "My questions have made your good days feel as though they don't count. I'm sorry; I haven't left enough room for them. I'd like to hear about the day you actually had. What would help you feel that I believe you?"
      }
    ],
    "case-michael": [
      {
        "text": "[Wounded but sharp] When you said I sounded hurt, it felt like you were calling me weak. I know hurt is probably your therapy word, but in my head it sounded like you were stripping away the part of me that can handle things.",
        "suggestion": "My word \"hurt\" sounded as though I was calling you weak and taking your strength away. I am sorry. I want to hear how you would describe it, without putting my words on you."
      },
      {
        "text": "[Skeptical] Are you actually experienced enough with anger like mine, or are you just following the training manual? I need to know whether you can handle the consequences if this goes badly at home.",
        "suggestion": "You need to know whether I can help with something that has real consequences at home. That is a fair question. I can explain my training, supervision, and limits, and we can consider together whether the help I can offer fits what you need."
      },
      {
        "text": "[Wounded but sharp] When you paused and watched me after I got angry, I felt judged, like you were waiting to see if I would explode. I stopped hearing you and started proving I was still in control.",
        "suggestion": "My pause and the way I watched you felt like judgment. I am sorry. I can say what I am noticing instead of leaving you to wonder whether I expect an outburst. What was it like for you in that pause?"
      },
      {
        "text": "[Defensive] When you asked about my wife's fear first, it felt like you had already decided I was the problem. I could feel myself building a defense instead of listening to the question.",
        "suggestion": "I asked about her fear before hearing your experience, and you felt I had already taken a side. I am sorry. I want to hear what happened for you too, while taking seriously that she felt afraid. What did I miss?"
      },
      {
        "text": "[Skeptical] When you said anger protects hurt, it sounded like something from a textbook, like you had the model ready before you heard me. I know I get angry, but I do not want to be turned into a therapy example.",
        "suggestion": "I offered an explanation before understanding how the anger actually feels for you. I am sorry. We can set that explanation aside. I want to hear what I missed, rather than make your experience fit the model."
      },
      {
        "text": "[Tense] You did not challenge me when I got loud, and now I wonder if you are scared of me.",
        "suggestion": "I hear that my silence left you unsure whether I was afraid of you. I am sorry I left you guessing. I can be more direct about what I am noticing and when we need a pause. How would that be for you?"
      },
      {
        "text": "[Ashamed] When I mentioned drinking, your face changed for a second. Maybe I am reading into it, but I felt judged, like you had just put me in the bad husband category.",
        "suggestion": "You noticed my face change and felt judged as a husband. I am sorry my expression left you with that. I want to understand the drinking and its effect on your life without reducing you to a label. What did that moment make harder to tell me?"
      },
      {
        "text": "[Irritated] You keep asking about my father, and it feels like you are blaming him for everything. I get that he matters, but when you keep going there, it feels like my choices now disappear.",
        "suggestion": "I kept returning to your father, and your choices now seemed to disappear from the conversation. I am sorry. We can set that history aside and focus on what is happening in your life today. Where would you like us to begin?"
      },
      {
        "text": "[Wounded but sharp] After I swore, you went quiet and I felt like you were done with me. It was not the word that mattered; it was the feeling that one sharp edge from me was enough to make you leave.",
        "suggestion": "I went quiet after you swore, and you felt I was pulling away. I am sorry. I can tell you what is happening for me rather than leave you guessing. What did you need me to hear when you used those words?"
      },
      {
        "text": "[Tense] When you say, Take a breath, it feels like you are trying to control me, like I am a kid about to be sent out of class. It makes me want to refuse just to keep my ground.",
        "suggestion": "When I told you to take a breath, you felt controlled and treated like a child. I am sorry. I can ask whether a pause would help instead of telling you what to do. You can say no."
      },
      {
        "text": "[Frowning] You said I was 'defending myself' when I corrected you. You had the facts wrong. Am I allowed to disagree with you here?",
        "suggestion": "I made your correction sound like a problem instead of checking what I'd got wrong. I'm sorry. Yes, you can disagree with me. Let's correct the facts first, and I want to hear what my response did to your trust in me."
      },
      {
        "text": "[Disappointed] You remembered the argument but not that I apologised to my son. It feels like you've already decided which kind of father I am.",
        "suggestion": "Missing the apology left you feeling that I'd reduced you to the argument. I'm sorry I left that out. I want to understand both the harm and your effort to repair it. Can we return to what happened when you apologised?"
      }
    ],
    "case-jason": [
      {
        "text": "[Quietly] When I freeze and say I do not know, I worry I am doing therapy wrong and wasting the session.",
        "suggestion": "Thank you for telling me. I hear that losing the words makes this feel like a test you are failing. We can stop trying to force an answer and take the pause together. What would help you feel less under pressure here?"
      },
      {
        "text": "[Hesitant] When you looked at the clock while I was searching for words, I felt unimportant. I know sessions have time limits, but in that moment it felt like my slow words were using up too much space.",
        "suggestion": "I looked at the clock while you were finding words, and you felt unimportant. I am sorry. I can let you know when we are nearing the end, rather than leave you to read that from a glance. Would that help?"
      },
      {
        "text": "[Fearful] A previous therapist pushed me to talk about feelings until I panicked and ended up in the ER; when you asked about my body right away, I got scared this would be the same.",
        "suggestion": "My question felt like the beginning of the pressure you experienced before. I am sorry I moved too quickly. We can stop the body questions now. I will ask before returning to them, and you can decline or stop at any point."
      },
      {
        "text": "[Quietly] You say it is okay to pause, but when I pause, I feel watched. Your face is kind, but it still feels like a spotlight, and then I rush to say anything so the pause will end.",
        "suggestion": "You feel watched even when I say a pause is okay. I am sorry my attention adds pressure. I can give you more space and avoid holding my gaze on you. Would that make it easier to pause?"
      },
      {
        "text": "[Anxious] When you suggested practicing with a group, I felt like you did not understand how impossible that sounds. I left thinking you saw my fear as something I could just rehearse my way out of.",
        "suggestion": "I suggested a group before understanding how impossible that felt to you. I am sorry. We can set that suggestion aside. I want to understand what makes it so frightening before we choose any practice step together."
      },
      {
        "text": "[Hesitant] When I went quiet, you said I seemed calm, but I was panicking. I was counting the seconds, trying not to look weird, and then I felt like you could not see what was actually happening.",
        "suggestion": "I called you calm when you were panicking, and you felt unseen. I am sorry. I will check with you rather than assume what your quiet means. What do you need me to understand about that moment?"
      },
      {
        "text": "[Embarrassed] I was trying to find the word, and you finished the sentence for me. I know you were helping, but I felt stupid, like even here I am too slow to speak properly.",
        "suggestion": "I finished your sentence while you were trying to find the word, and you felt stupid. I am sorry. I can wait and let you finish, unless you ask for help. How would that be for you?"
      },
      {
        "text": "[Ashamed] When you called it avoidance, it sounded like you were criticizing me. I already know I pull back; hearing that word made me feel like I was failing therapy too.",
        "suggestion": "I used \"avoidance\", and it sounded like criticism when you were already struggling. I am sorry. We can set that term aside and talk about what happens when you pull back, in words that fit your experience."
      },
      {
        "text": "[Fearful] When you asked me to look at you while I talked, I felt exposed, like I was being inspected. I know eye contact is supposed to be connection, but for me it made the words disappear.",
        "suggestion": "Asking for eye contact made the moment too exposing, and I am sorry I treated connection as if it had to look one way. Where would it feel safer for your eyes to rest while we talk?"
      },
      {
        "text": "[Quietly] When you asked why I did not go to the party, I heard judgment in it. I know it was probably just a question, but it sounded like, Explain yourself, and I felt small.",
        "suggestion": "My question sounded like a demand to explain yourself, and you felt small. I am sorry. We can put the party aside for a moment. I want to understand what that question was like to hear from me."
      },
      {
        "text": "[Very quiet] You said 'just tell them what you need.' If it was just that, I wouldn't be here. I felt a bit stupid after that.",
        "suggestion": "'Just' made something very difficult for you sound easy, and left you feeling stupid. I'm sorry. I want to understand what happens when you try to speak, rather than skip over it. Would it feel better to start with one recent moment, or do you need me to hear more about what I said first?"
      },
      {
        "text": "[Looking down] I said I was fine because you looked pleased with my answer. I wasn't fine. Now I don't know how to go back without disappointing you.",
        "suggestion": "My reaction made it harder for you to tell me you weren't fine. I'm sorry; you don't have to give me an answer that keeps me pleased. You can correct me, including now. What would make it easier to go back to how you actually felt?"
      }
    ],
    "case-laura": [
      {
        "text": "[Flat and guarded] When you asked about my childhood that quickly, I felt exposed and wanted to leave. I had only mentioned one piece, and suddenly it felt like the whole door was being opened.",
        "suggestion": "I moved too quickly with my question about your childhood. You felt exposed, and I am sorry. We can stop that topic now. I will ask before returning to it, and you can say no."
      },
      {
        "text": "[Distant] When I told you about my mother at the sink and you smiled for a second, I thought you were laughing at me.",
        "suggestion": "You saw me smile while telling me something painful, and thought I was laughing at you. I am sorry my expression gave that impression. I want to hear what that moment was like for you, without asking you to dismiss what you saw."
      },
      {
        "text": "[Slow and flat] You are younger than me, and sometimes I wonder if you can really understand a life that has been shut down for this long.",
        "suggestion": "You wonder whether someone younger can understand how long you have lived this way. That is important to talk about. I cannot assume I know your life. I can listen carefully and let you correct me when I miss something. What feels hardest for me to understand?"
      },
      {
        "text": "[Flat and guarded] When you wrote notes while I talked about what happened, I felt recorded instead of met. I started wondering what sentence you were putting down and whether it would become the official version of me.",
        "suggestion": "My note-taking left you wondering whether I was deciding the official story about you. I am sorry. I can put the notes aside now, and we can discuss what I record and why before I write more. Would that help?"
      },
      {
        "text": "[Wary] When you asked whether I trust you, it felt like pressure to say yes. If I said no, I imagined you getting hurt or thinking I was difficult, so I gave a safer answer than the real one.",
        "suggestion": "My question left you feeling you had to protect me instead of tell me the truth. I am sorry. You do not owe me a yes. I can ask about specific moments that feel difficult, without expecting you to reassure me about the relationship."
      },
      {
        "text": "[Tense] When you said I am safe now, my body felt like you did not believe the danger. I know I am sitting in your office, but the words made it sound like I should be over what my body is still doing.",
        "suggestion": "Saying \"safe now\" made it sound as though you should be over the reaction. I am sorry. I want to understand what it is actually like for you, rather than tell you how your body should feel."
      },
      {
        "text": "[Distant] When you suggested imagining my mother here, I felt pushed toward something too big. I know it might be useful someday, but in that moment it felt like being pulled into deep water before I had said yes.",
        "suggestion": "I suggested that before checking whether you wanted to try it, and it felt too big. I am sorry. We can leave it aside. I will ask before suggesting we go further, and you can say no."
      },
      {
        "text": "[Flat] You moved from my ex to childhood so quickly that it felt like you were following a checklist. I had barely said what happened this week before it became about the past.",
        "suggestion": "I moved to childhood before hearing what happened this week. I am sorry. We can return to what you were telling me about your ex, without looking for a link to the past. What did I pass over?"
      },
      {
        "text": "[Ashamed] When you asked how much wine I drink, I heard that voice people use when they already know the answer and are disappointed. I shut down because I thought you were seeing me as another problem to manage.",
        "suggestion": "My tone made you feel I had already judged the drinking, and you shut down. I am sorry. I want to understand what it is like for you before making assumptions. Can we start with what made that question hard to hear?"
      },
      {
        "text": "[Low voice] When you said I survived, it sounded like you were saying I should be fine. I know you meant strength, but I heard, The worst is over, so why are you still like this?",
        "suggestion": "I said \"survived\", and you heard that you should be fine by now. I am sorry. I want to understand what you are still living with, without treating survival as the end of the pain. What did my words leave out?"
      },
      {
        "text": "[Flat, guarded] You keep saying there's a lot underneath. Maybe there is. But it feels like whatever I tell you isn't the real answer you're waiting for.",
        "suggestion": "I've made what you tell me feel insufficient, as though I'm waiting for a different answer. I'm sorry. I want to take your experience as you describe it seriously. Could we set aside the search for something underneath and check what you need me to understand now?"
      },
      {
        "text": "[Slowly, avoiding eye contact] I said I didn't want to go further. You asked one more question anyway. I answered, but I stopped trusting you a bit.",
        "suggestion": "You set a limit and I went past it. I'm sorry. Answering didn't mean you had agreed to continue, and I should have respected your stop. We won't go back into that material now. What would help you feel more in control of our conversation here?"
      }
    ],
    "case-carlos": [
      {
        "text": "[Defensive] Sometimes it feels like you hear respect as just ego, like you do not get what it meant where I grew up.",
        "suggestion": "I hear that I have made your need for respect sound as though you only care about yourself. I am sorry. I want to understand what respect meant where you grew up before we decide what needs to change. What have I missed?"
      },
      {
        "text": "[Tense] When you kept saying 'slow down,' it sounded like you wanted me to act soft. I know you probably meant regulate, but in my head it became, Be smaller, be easier to handle.",
        "suggestion": "When I said \"slow down\", you heard \"make yourself smaller\". I am sorry. I can ask what is happening for you and whether a pause would help, without asking you to hide the anger or agree with me."
      },
      {
        "text": "[Angry] When I talked about my kid flinching from me, you looked away for a second. I know it might have been nothing, but it felt like even you did not want to look at what I did.",
        "suggestion": "I looked away while you were telling me about your child flinching, and you felt I could not face it with you. I am sorry. I want to hear what happened and take your child’s fear seriously, without leaving you alone with it."
      },
      {
        "text": "[Angry] When I got loud, you flinched, and then I felt like the dangerous guy in the room. I was already ashamed of scaring people; seeing you react like that made me want to quit talking.",
        "suggestion": "You saw me flinch and felt reduced to the dangerous person in the room. I am sorry that added to your shame. I need to manage my reaction and be clear about any boundaries, rather than leave you to read them from my face."
      },
      {
        "text": "[Defensive] When you asked if I was afraid, it sounded like you were trying to make me admit I am weak. I felt my back go up, like you were taking respect from me.",
        "suggestion": "My question about fear sounded as if I was calling you weak. I am sorry. I can set that word aside and ask what it was like for you, without deciding in advance which feeling you must admit to."
      },
      {
        "text": "[Tense] When you talk about repair with my son, I hear you saying I am a bad father. I know I need to face things, but if it starts with me being the villain, I shut down.",
        "suggestion": "I hear that talking about repair sounded like judging you as a bad father. I am sorry. Taking responsibility for what happened should not mean reducing you to that label. What do you need me to understand before we continue?"
      },
      {
        "text": "[Wounded but sharp] You glanced at the door after I got angry, and I felt like you were checking an escape route.",
        "suggestion": "You saw me look at the door and felt I wanted to get away from you. I am sorry my glance left you with that. I can speak directly about what I am noticing and any safety concerns, rather than leave you to guess."
      },
      {
        "text": "[Defensive] When you brought up drinking, you sounded exactly like my wife, like you already had the case built. I came in ready to be honest, and then I felt like I was on trial.",
        "suggestion": "My question about drinking sounded like an accusation, and you felt on trial. I am sorry. We can start again with what the drinking is like for you. I want to understand it before making assumptions."
      },
      {
        "text": "[Angry] When you used the word violence, I felt like you had already decided I am a criminal. I am not saying what I did was okay, but that word made it feel like there was no whole person left to talk to.",
        "suggestion": "When I said \"violence\", you felt written off as a criminal. I am sorry I left you feeling that. We need to speak honestly about the harm, and I also want to understand the whole person here. What did that word stop you from telling me?"
      },
      {
        "text": "[Defensive] When you ask about my family, it feels like you are blaming where I come from. There are things that hurt me there, but there is pride there too, and I do not want you looking at it like a pathology.",
        "suggestion": "I hear that my family questions feel like blame toward your background, and I am sorry I gave that impression. What do I need to respect about where you come from before we explore what hurt you there?"
      },
      {
        "text": "[Angry, restrained] When you asked if I felt 'small,' I heard you calling me weak. Then you kept using that word. I don't want to sit here being talked down to.",
        "suggestion": "I kept using a word that left you feeling belittled. I'm sorry; I should have checked how it landed. We can drop that word. I want to understand the experience in language that fits you. What do you need me to hear about it?"
      },
      {
        "text": "[Low, tense] You said you could see how hard I was trying, then moved on. My daughter is still scared of my temper. It felt like you were letting me off because you didn't want trouble.",
        "suggestion": "Moving on after saying that left you feeling I'd sidestepped something serious. I'm sorry. Her fear needs our attention; acknowledging your effort doesn't settle that. Can we return to what happens with your temper and agree on how to keep her safety central in our work?"
      }
    ],
    "case-nina": [
      {
        "text": "[Tearful] When I cried, you were quiet for a long time. I know silence can be supportive, but I felt alone with it, like I was supposed to figure out how to stop crying by myself.",
        "suggestion": "My silence left you alone with the tears. I am sorry. I could have checked how you were doing instead of leaving you to guess. If the tears come again, I can let you know I am listening and ask what you need. Would that help?"
      },
      {
        "text": "[Apologetic] When you asked about his side of chores, it felt like you took my ex's side. I know there are two perspectives, but I came here because mine keeps disappearing.",
        "suggestion": "I asked about his side before hearing yours, and you felt overlooked again. I am sorry. We can stay with your experience now. What did you need me to hear about how the chores fall on you?"
      },
      {
        "text": "[Torn] Sometimes when I talk about chores and the kids, I see you look tired and wonder if even you are sick of this.",
        "suggestion": "You notice tiredness in my face and wonder whether I am tired of hearing about your life. I am sorry my expression leaves you unsure. I can tell you what I am noticing rather than leave you to guess. What has been hardest to say when that happens?"
      },
      {
        "text": "[Apologetic] When you say boundaries, I hear it like you are saying I should already know how to do basic life. I sit here nodding, but inside I feel like a failing adult and mother.",
        "suggestion": "I spoke about boundaries in a way that made you feel you were failing as a mother and adult. I am sorry. We can put that word aside and look at one situation you find difficult, without treating it as something you should already know how to handle."
      },
      {
        "text": "[Tearful] When I finally stopped crying last week, I saw your shoulders drop and your face soften, and I thought, Oh, she is relieved. Then I felt embarrassed for taking up so much space.",
        "suggestion": "When my shoulders dropped, you thought I was relieved that your crying had stopped. I am sorry that left you feeling you had taken too much space. I want to hear how that moment was for you, without asking you to put your feelings away for my sake."
      },
      {
        "text": "[Lost] When you ask what I want, I feel abandoned, like I am supposed to know alone. I have spent years guessing what everyone else wants, so the question drops me into a blank place.",
        "suggestion": "My question left you feeling alone with something you do not yet know. I am sorry. We can take it more slowly and explore it together; you do not have to arrive with an answer."
      },
      {
        "text": "[Tired] When you suggested rest, it sounded like you do not understand my actual life. I went home thinking, She has no idea what the kitchen, the boys, my mother, and the messages look like by 9 p.m.",
        "suggestion": "I suggested rest without understanding what your evening actually involves. I am sorry. We can set that suggestion aside and look at the demands on you before deciding what is possible. What had I not understood about that night?"
      },
      {
        "text": "[Ashamed] When you called it resentment, I felt like you had found something ugly in me. I know I complain about doing everything, but I do not want to be seen as bitter or mean.",
        "suggestion": "The word \"resentment\" made you feel I had found something ugly in you. I am sorry. We can set it aside and hear what it is like to be doing so much. You do not have to accept my label for your feeling."
      },
      {
        "text": "[Apologetic] I said sorry five times and you did not notice, so I felt invisible again. It is embarrassing to say, because I know you cannot catch everything, but it felt like the whole pattern was happening right in front of us.",
        "suggestion": "I missed the repeated apologies, and you felt invisible again. I am sorry. Thank you for pointing it out. We can pause here and notice what you were apologizing for; you do not need to apologize for bringing this to me."
      },
      {
        "text": "[Torn] When you focused on my ex, I felt like the kids disappeared from the room. I know he matters, but every choice I make goes through them first, and I felt like you missed that.",
        "suggestion": "I focused on your ex and missed how much every decision involves the children. I am sorry. We can bring them into the conversation now. What do you need me to understand about their place in the choices you are facing?"
      },
      {
        "text": "[Apologetic, upset] You called me a 'natural carer.' I know you meant it kindly, but it's what everyone says before they ask for something. I felt tired just hearing it.",
        "suggestion": "That phrase put you back in the role everyone relies on, instead of seeing how tired you are. I'm sorry. I want to hear who you are beyond what you give others. Can we start with what you needed me to recognise in that moment?"
      },
      {
        "text": "[Small smile, then tears] You said 'we've got five minutes' and I immediately wrapped everything up nicely. I went home crying. I think I was trying to make ending easy for you.",
        "suggestion": "My time reminder left you feeling you had to tidy away what you felt for my sake. I'm sorry I didn't notice that happening. We do need to end on time, but not by asking you to seem fine. Could we agree on a way to approach the ending that leaves room for how you actually are?"
      }
    ],
    "case-aisha": [
      {
        "text": "[Desperate] When you did not reply to my message fast, I panicked and felt abandoned. I know you have other clients and a life, but in my body it was just, She is gone, I did too much.",
        "suggestion": "Thank you for telling me. Waiting for my reply felt like being left, and you thought you had asked too much. Let's be clear about when I can reply and what support is available when I cannot, rather than leave you guessing."
      },
      {
        "text": "[Desperate] When the session ended exactly on time, it felt like you dropped me. I know there has to be a clock, but the way it happened made me feel like the connection disappeared the second the hour was over.",
        "suggestion": "When we ended, you felt the connection disappear. I am sorry the ending felt so abrupt. I need to keep the time limit, and we can leave room before it to check how you are and what support you need until we meet again."
      },
      {
        "text": "[Mistrustful] This is awkward, but after you asked so much about who I sleep with, I wondered if you were interested in me like that.",
        "suggestion": "Thank you for telling me. My questions left you wondering whether this was personal interest. I am sorry. This relationship is professional and will not become sexual or romantic. I can explain why I asked, and we can leave those questions aside while we talk about your concern."
      },
      {
        "text": "[Desperate] I emailed you and did not hear back, and I spiraled all night. I kept checking my phone and telling myself I had ruined the therapy too, even though part of me knew you probably had rules about email.",
        "suggestion": "You waited for a reply and spent the night fearing you had ruined the therapy. I am sorry the wait was so painful. We need to be clear about when I can answer email and what support is available when I cannot. What did the silence mean to you that night?"
      },
      {
        "text": "[Hurt] When you said boundaries, I heard, Here is the rule for keeping you away. It felt less like care and more like punishment for needing too much.",
        "suggestion": "The way I spoke about boundaries made them sound like punishment for needing me. I am sorry. I can explain what each limit is and why it is there, and listen to how it affects you. Your needs still belong in that conversation."
      },
      {
        "text": "[Ashamed] When I mentioned cutting, your eyes got wide and I felt like I scared you. Then I wanted to take care of you instead of tell you how bad it had been.",
        "suggestion": "My reaction made you feel you had to take care of me. I am sorry. That is my responsibility. I want to hear how bad it has been for you and check how you are now, without you having to protect me from it."
      },
      {
        "text": "[Mistrustful] When you said you write notes, I wondered what version of me you are putting in there. I started imagining a file where I sound unstable, dramatic, or worse than I mean to be.",
        "suggestion": "You are worried that my notes will describe someone you do not recognize as yourself. Thank you for telling me. I can explain what I record and why, and hear where my understanding misses yours, rather than leave you guessing about it."
      },
      {
        "text": "[Desperate] When you said we could not add an extra session this week, it felt like rejection. I heard the scheduling limit, but underneath it I heard, Your need is too much for me.",
        "suggestion": "You heard my no as rejection, as though your need was too much. I am sorry. I cannot add a session this week. We can still talk about what feels hardest and make a plan for support until we meet again."
      },
      {
        "text": "[Panicked] You sounded so calm when I was falling apart that I thought you did not care. I know calm can be grounding, but it felt like you were on the other side of glass watching me lose it.",
        "suggestion": "My calm sounded distant when you needed to feel me with you. I am sorry. I can be more direct about what I hear and check how you are, rather than sit quietly while you feel alone. Would that help us reconnect now?"
      },
      {
        "text": "[Angry] When you used that diagnosis word, I felt reduced to a problem. It was like all the reasons I react this way disappeared, and now I was just a label you knew how to handle.",
        "suggestion": "I used a diagnosis word, and you felt reduced to a problem. I am sorry. We can set that word aside and talk about what happens for you and what you have lived through. I do not want a label to replace understanding you."
      },
      {
        "text": "[Angry, hurt] You said 'we've talked about this before.' I heard, 'I'm sick of you.' Now I don't want to tell you anything, and I want you to make it right.",
        "suggestion": "That phrase made you feel I was tired of you and left you hurt and angry with me. I'm sorry I said it that way. I want to understand this moment rather than dismiss it as something we've covered. What do you most need me to hear before we try to continue?"
      },
      {
        "text": "[Tearful, accusing] You told me we'd talk about your holiday today. Then I had to bring it up. If I don't keep track, you just forget what matters to me.",
        "suggestion": "I said I would bring up the holiday and then left you to do it. I'm sorry. That put the burden on you and made it harder to trust that I'd remember what matters. Let's give it time now, including clear arrangements for the break. What has been hardest about my not raising it?"
      }
    ],
    "case-david": [
      {
        "text": "[Stern and angry] I do not think this therapy is working. I keep coming here, saying the same things, and maybe we are both wasting time.",
        "suggestion": "I hear how frustrating it is to keep coming without seeing the change you want. Thank you for saying it directly. We need to review what is helping and what is not, including whether a different approach would fit better. What change have you most wanted to see?"
      },
      {
        "text": "[Dismissive] When I asked for strategy, you kept returning to feelings, and I felt ignored. I came in asking for something I could actually do, and it felt like you kept taking the tool out of my hand.",
        "suggestion": "You asked for something practical, and I kept taking us back to feelings. I am sorry I missed what you were asking for. We can begin with one situation you want to handle differently and agree on something concrete to try."
      },
      {
        "text": "[Wounded but sharp] When you named my wife's hurt first, it felt like you were siding with her. I know she is hurt, but I was trying to show you mine, and it felt like mine was already less important.",
        "suggestion": "I spoke about her hurt before hearing yours, and you felt yours mattered less. I am sorry. I want to hear what you were trying to show me too. We can make room for both without deciding that one cancels out the other."
      },
      {
        "text": "[Stern] When you challenged me in that tone, I felt humiliated, not helped. It reminded me of being dressed down in a meeting, and after that I stopped listening to the point you were making.",
        "suggestion": "My tone left you humiliated and unable to hear what I was saying. I am sorry. I can put the challenge aside and hear how I spoke to you before we return to the issue. What did that moment bring up?"
      },
      {
        "text": "[Dismissive] When you called it self-protection, it sounded like a polite clinical way of saying narcissistic. I could hear the soft wording, but underneath it I still felt diagnosed and looked down on.",
        "suggestion": "\"Self-protection\" sounded like a diagnosis hidden in softer words. I am sorry. We can leave that term aside and look at what actually happens in a difficult conversation, without deciding beforehand what it says about you."
      },
      {
        "text": "[Wounded but sharp] You took my wife's tears more seriously than mine. When I talk sharply, it seems like you hear arrogance; when she cries, you hear pain.",
        "suggestion": "I hear that I have overlooked your pain when you spoke sharply, while taking her tears seriously. I am sorry. Your pain deserves my attention too. What did you need me to hear in that moment?"
      },
      {
        "text": "[Controlled] When you asked for details about the affair, I felt judged and exposed. I could not tell whether the questions were helping the work or whether I was being made to confess.",
        "suggestion": "My questions left you feeling judged and unsure why I needed those details. I am sorry. We can pause them now. I can explain what I was trying to understand, and we can agree on what is relevant before asking for more."
      },
      {
        "text": "[Irritated] When you said there are no quick fixes, it sounded condescending, like you were telling me I am naive for wanting movement. I am not asking for magic; I am asking whether this is actually going somewhere.",
        "suggestion": "\"No quick fixes\" sounded as if I was dismissing your wish for change. I am sorry. You were asking whether the work is going anywhere. We can choose a concrete change to look for and agree on when to review whether our approach is helping."
      },
      {
        "text": "[Dismissive] You seemed impressed by my career, and then I felt like you missed the mess at home. I get enough people admiring the polished version; I need you not to be fooled by it.",
        "suggestion": "My attention to your career left you feeling I had missed what was happening at home. I am sorry. We can put the career aside and talk about what the polished version hides. What do you most need me to understand?"
      },
      {
        "text": "[Cold] When you mentioned referrals, it felt like you were done with me. I heard it as, If this is not working, maybe you should go somewhere else, and I shut down.",
        "suggestion": "When I mentioned a referral, you felt I was giving up on you. I am sorry. We can pause that discussion and talk about what is not working here. If we consider other help, I want us to discuss why and what it would mean, rather than leave you feeling sent away."
      },
      {
        "text": "[Controlled, stern] You described my explanation as 'intellectualising.' That's a convenient way to dismiss anything I say that doesn't fit your theory. Why should I continue?",
        "suggestion": "That label dismissed the explanation you were trying to give, and now you're questioning whether I will take you seriously. I'm sorry. I'd like to hear your explanation without putting a label on it, if you're willing. What would I need to understand for continuing here to feel worthwhile?"
      },
      {
        "text": "[Cold, uneasy] You said you were touched by me. That sounds personal. Am I paying to be someone you feel close to? I don't like not knowing the terms.",
        "suggestion": "My words blurred the professional frame for you and left you uneasy about what I'm asking of you. I'm sorry. You are not here to meet my emotional needs; keeping those boundaries is my responsibility. Can we talk about what felt unclear or uncomfortable, so the terms of our work are clear to you?"
      }
    ],
    "case-marcus": [
      {
        "text": "[Slow and flat] When I said I felt nothing, you kept asking what was under it, and I shut down. Nothing was already the edge; it felt like you wanted me to produce something else.",
        "suggestion": "You told me there was nothing, and I kept asking you to find something else. I am sorry. We can stop that search. I want to take what you actually experience seriously, including feeling nothing."
      },
      {
        "text": "[Low voice] When you moved your chair closer, I felt trapped and on edge. I knew you probably meant it as warmth, but my body read it as someone taking up more space than I had agreed to.",
        "suggestion": "I moved closer without checking, and you felt trapped. I am sorry. I can move back now. Where would you like me to sit? I will ask before changing the distance again."
      },
      {
        "text": "[Hypervigilant] When you ask about nightmares, I wonder if you actually know what to do with this or if it is too much for you.",
        "suggestion": "Thank you for telling me. My question left you unsure whether I could help with what might come up. Let's pause here. You deserve an honest answer about my experience, limits, and support before deciding whether to go further. What do you most need to know?"
      },
      {
        "text": "[Tense] When you asked me to close my eyes, my body went on alert. I know it was supposed to help me focus, but for me it felt like giving up the room.",
        "suggestion": "Closing your eyes meant losing track of the room, and I had not understood that. I am sorry. You can keep them open. We can find a way to focus that lets you stay aware of where we are."
      },
      {
        "text": "[Flat] When you called it a trauma response, I felt like a category. I know that might be accurate, but I stopped feeling like you were talking to me.",
        "suggestion": "I called it a \"trauma response\", and you felt I was speaking to a category instead of you. I am sorry. We can set that term aside. I want to hear how you would describe what happens."
      },
      {
        "text": "[Low voice] When I mentioned the violence at home, your face changed. Maybe I read it wrong, but it looked uncomfortable, and then I felt like I had to make it smaller so you could handle it.",
        "suggestion": "You saw my face change and felt you had to make the violence sound less serious. I am sorry. I need to take responsibility for my reactions; that is not your job. How did that moment affect your trust in me?"
      },
      {
        "text": "[Guarded] I said I did not want to talk about nightmares, and you asked one more question anyway. It was only one question, but it made my no feel weak in here.",
        "suggestion": "You said no, and I asked another question anyway. I am sorry. I will stop that topic now. You do not have to say no more strongly for me to respect it."
      },
      {
        "text": "[Hypervigilant] You sat between me and the door, and I could not hear anything else. I kept nodding, but I was tracking the route out the whole time.",
        "suggestion": "I sat between you and the door, and you could not focus on anything else. I am sorry I did not ask about the seating. We can change it now. Where would you like me to sit so the way out stays clear?"
      },
      {
        "text": "[Stern] When you say, You are safe here, I feel like you do not know what safe means. It sounds too clean, like a phrase from a room where nothing bad has ever happened.",
        "suggestion": "I said \"safe here\" as if I could decide how the room feels to you. I am sorry. I can ask what helps you feel less on guard instead of telling you that you are safe. What do I need to understand about this room right now?"
      },
      {
        "text": "[Flat] You ask about foster care almost every session, and after a while it feels like digging. I start wondering whether you are listening to me now, or only looking for the old story underneath everything.",
        "suggestion": "I kept returning to foster care when you wanted me to hear your life now. I am sorry. We can leave that history aside. I will ask before returning to it, and I want to hear what matters to you today."
      },
      {
        "text": "[Flat, angry] I told you I hadn't slept after last time. You asked whether the memory was clearer. You didn't hear me. I'm not doing that again.",
        "suggestion": "You told me the work had cost you sleep, and I responded as though getting more detail mattered more. I'm sorry. We won't repeat that work now. I want to understand how you were affected and agree with you on what feels manageable before we decide how to proceed."
      },
      {
        "text": "[Guarded, voice low] You said 'at least you came home.' That's what everyone says. I thought I wouldn't have to hear it here.",
        "suggestion": "'At least' made your loss sound as though surviving should cancel it out. I'm sorry. You expected room here for what coming home has actually been like. I want to hear what my words left out, without asking you to be grateful instead."
      }
    ]
  }
};

Object.assign(STATEMENT_SETS, EXTENSION_STATEMENTS);
for (const [skill, cases] of Object.entries(ARNE_STATEMENTS)) Object.assign(STATEMENT_SETS[skill], cases);
for (const [skill, cases] of Object.entries(MIA_STATEMENTS)) Object.assign(STATEMENT_SETS[skill], cases);
for (const [skill, cases] of Object.entries(NORA_STATEMENTS)) Object.assign(STATEMENT_SETS[skill], cases);

for (const [skill, cases] of Object.entries(FIXED_CASE_EXTENSION_STATEMENTS)) Object.assign(STATEMENT_SETS[skill], cases);
