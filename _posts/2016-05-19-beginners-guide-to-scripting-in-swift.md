---
layout: post
title: "A Beginner's Guide to Scripting in Swift"
date: 2016-05-19 14:45:00
author: Hector Matos
tags: [swift, ios]
category: blog
excerpt: Since Apple came out with Swift in 2014, most programmers have focused on using it to write iOS/Mac OS X applications. It was the first instinct many of us had upon learning the language. In fact, it was the only instinct I had on the day Swift first came out. It wasn't until seven months later that I realized it was even more powerful than it seemed, and that scripting in Swift was not only possible but quite easy!
images:
  banner: /assets/posts/beginner-guide-to-swift-scripting/banner.png
  compiling-swift: /assets/posts/beginner-guide-to-swift-scripting/compiling-swift.png
  xcode-clt: /assets/posts/beginner-guide-to-swift-scripting/xcode-clt.png
  xcode-error: /assets/posts/beginner-guide-to-swift-scripting/xcode-error.png
  hammer-egg: /assets/posts/beginner-guide-to-swift-scripting/hammer-egg.png
---
[![Rays of Sunshine]({{ site.baseurl | append: page.images.banner }})]({{ site.baseurl | append: page.images.banner }})

<div class="centered italic">
  Adapted from a blog post that originally appeared on <a href="http://krakendev.io/">KrakenDev.io</a>*
</div>

Since Apple came out with Swift in 2014, most programmers have focused on using it to write iOS/Mac OS X applications. It was the first instinct many of us had upon learning the language. In fact, it was the only instinct I had on the day Swift first came out. It wasn't until seven months later that I realized it was even more powerful than it seemed, and that scripting in Swift was not only possible but quite easy!

## The Story

The move from Swift 1.1 to Swift 1.2 in 2015 was a big one. The update changed the syntax of the language and populated projects with what seemed like a thousand errors when running in the new Xcode Beta. What made this worth it were the enhancements to the Swift compiler. In particular, I'm talking about the enhancement that changed the recompilation of every Swift file every time you started a build to incremental compilations.

At the time, I was working on a huge, mature project and the compile times were killing us. We were seeing compile times of 15 minutes on average, even if the only change was a comment. In comparison, the new Swift compiler in Swift 1.2 gave us an average of 1-3 minutes for each compilation.

[![Compiling Swift]({{ site.baseurl | append: page.images.compiling-swift }})]({{ site.baseurl | append: page.images.compiling-swift }})

Long story short, we wanted to use the beta version to develop (because of the compile times) but couldn't release to the App Store if we had code written in Swift 1.2 due to their beta release restrictions. What was the solution? Well, we decided to write Swift 1.2 code and it's Swift 1.1 counterparts at the same time. It looked like this:

```swift
//====================Swift 1.2 Code===================="
// let kraken = mythicalBeast as! Kraken
//====================Old Swift Code===================="
// let kraken = mythicalBeast as Kraken
//==========================End========================="
```

For release time, we needed to write a script that would comment out the Swift 1.2 code and uncomment the old Swift 1.1 code (and vice versa) for dev cycles. At the time, the only scripting language I knew was Python. A quick Google search of other scripting languages gave me [this](http://www.tutorialspoint.com/python/python_basic_syntax.htm).

If you pay attention to what's on that page, you'll notice it mentions an interactive mode and creating a Python file with a line of [Shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) at the top. That interactive mode launches what's called a Python REPL (Read-Eval-Print-Loop). Wait, what's that? A REPL?

__Swift has one of those!!!__

It turns out, you can use the Swift REPL to do the same thing! So let's start...

## Actually Scripting In Swift

First and foremost, we need an environment to easily code in. Creating a Swift file is an easy task but when you're writing your script, remember you’ll need syntax highlighting, quick class lookup, documentation, and so forth. You could always just touch `MyScript.swift` in the Terminal and use Vim to go from there, However, this example is geared to someone who isn't that proficient in programming.

So let’s get started. First, you’ll need to start with a new Xcode OS X Command Line Tool Application:

[![Xcode Command Line Tool]({{ site.baseurl | append: page.images.xcode-clt }})]({{ site.baseurl | append: page.images.xcode-clt }})

Understand that renaming files is not ideal, but Xcode does not recognize Shebang in any other file but the `main.swift` file. Throwing it at the top of any other file that isn't named "`main.swift`" will give you this warning:

[![Xcode Error]({{ site.baseurl | append: page.images.xcode-error }})]({{ site.baseurl | append: page.images.xcode-error }})

For now, let's just save the renaming of your `main.swift` file for the end, when your script is ready to go. Now, in your `main.swift` file, remove any generated code and comments and add this line of code on the first line of your Swift file:

```
#!/usr/bin/swift
```

This line essentially launches the Swift REPL first, so the rest of your file actually compiles in a Swift environment.

Next step is to make your `main.swift` file executable. Open up Terminal, navigate to your `main.swift` file's directory, and execute this command:

```
$ chmod +x main.swift
```

From here, go back to Xcode and start working. The rest of the file can be treated like any regular Swift file. The cool part here is that you can even import frameworks like [Foundation](http://foundation.zurb.com/). Anything you can do with Foundation, you can put into a script - this includes File I/O, string manipulation, and more. The only “gotcha” to remember is that scripts in Swift follow the same principle as programs in C or items in an Xcode Playground - any functions, classes, or declarations need to be above their usages like so:

```swift
#!/usr/bin/swift   
import Foundation  
class MythicalBeast {
    func whatsMyName() {
        println("I don't know what I am, but I'm the stuff of legends.")      
    }  
}   

class Kraken: MythicalBeast {
    override func whatsMyName() {
        println("I'm the Kraken, yo!")      
    }  
}
//can't use the Kraken class until after the declaration  
let kraken = Kraken() kraken.whatsMyName()
```

Once you have your script ready to go, running it is a simple matter of navigating to your Swift script and executing it in the Terminal like so:

```
$./main.swift  I'm the Kraken, yo!
```

Your script can even accept arguments. Just append whatever you want after your execution command to add your arguments like a regular script:

```
$ ./main.swift firstArgument secondArgument thirdArgument
```

To read these arguments in your script, you can use the enum process in the Swift Standard Library like so:

```
dump(Process.arguments)
```

Using the terminal command we just wrote, the above code will print out each argument to the Terminal on new lines like so:

```
$ ./main.swift firstArgument secondArgument thirdArgument
▿ 4 elements     
- [0]: ./main.swift        
- [1]: firstArgument        
- [2]: secondArgument        
- [3]: thirdArgument
```

There you go! That should be everything you need to know.

[![Hammer Egg]({{ site.baseurl | append: page.images.hammer-egg }})]({{ site.baseurl | append: page.images.hammer-egg }})

*With great power comes great responsibility.*

NOTE: If you'd like to see a non-updated version of my first ever Swift script, check [this repo out](https://github.com/hectormatos2011/SwiftOnePointTwoConverter). That repo contains the script I wrote in the story at the top of this post.

## Using SwiftC to Make Things a Little Easier

I received a tweet from [@eneko](https://twitter.com/eneko) stating that you could also use the Swift compiler in Terminal, `swiftc` (only as of Xcode 6.1 and on Yosemite), to compile your Swift files into an executable binary. This skips the chmod +x call and gets right to using the tools we know and love:

```
$ swiftc main.swift -o kraken //The parameter after -o is the name you really want your script to be called other than "main".
```

The only issue with using `swiftc` is that, depending on your environment, you may need to run `xcrun sdk macosx swiftc` before your Terminal command if you’re trying to import frameworks like Foundation into your Swift script:

```
$ xcrun -sdk macosx swiftc kraken.swift -o kraken
```

This is only necessary if you get an error that looks like this in your console:

```
<unknown>:0: error: cannot load underlying module for 'CoreGraphics' <unknown>:0: note: did you forget to set an SDK using -sdk or SDKROOT? <unknown>:0: note: use "xcrun -sdk macosx swift" to select the default OS X SDK installed with Xcode
```

If that code looks ugly and hard to remember, you can always alias the `xcrun` line by putting this line in your `.bash_profile`:

```
alias swiftc='xcrun -sdk macosx swiftc'
```

Save your ``.bash_profile`, start a new Terminal window, and voila! This beautiful command should now work as intended:

```
$ swiftc main.swift -o kraken
```

After a successful compilation, you should be able to execute your executable binary like so:

```
$ ./kraken
```

### PRO-TIP #1

Using this command should also enable you to compile more than one Swift file together. You may need this if your Swift script gets to be a little too long and you want to split functionality amongst several files. Just add the files you want to compile together before the -o argument and you should be set!

```
$ swiftc one.swift two.swift three.swift -o combined.swift
```

### PRO-TIP #2

If you want to get even fancier, and if you have sudo permissions, moving your binary to the ``/usr/bin` folder will make your script universal, and can be used in any directory in Terminal. It also removes the need to call your script with `./.` You can do this by moving your executable like so:

```
$ sudo cp kraken /usr/bin
```

This simplifies the execution of your script even further by making future commands to this script look like this:

```
$ kraken firstArgument secondArgument etc
```

## CATO - A Neat Library by [@NEONACHO](https://twitter.com/NeoNacho)

I'm also going to encourage you to check out [this great ruby gem](https://github.com/neonichu/cato) by Boris from [Cocoapods](https://cocoapods.org/). It's a neat way of enabling your scripts to be versioned by giving you the power to specify which version of Swift your script is written in and more!

## Conclusion

Scripting is a powerful asset and a useful tool in any programmer's tool belt. For many iOS Devs, Swift or Objective-C are the only languages they know. If they know Swift, then there is no need to learn Python or another scripting language when writing simple scripts for any automation process. This even includes Continuous Integration. I’ve even used it with Jenkins when automating deployment of applications. Hopefully with this guide, you can travel a little further on the automation train. Happy coding!
