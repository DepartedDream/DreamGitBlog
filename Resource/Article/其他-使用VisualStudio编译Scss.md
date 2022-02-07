# 使用VisualStudio编译Scss

* 使用NuGet安装以下库

```
LibSassHost
LibSassHost.Native.win-x64
LibSassHost.Native.win-x86
```

* 调用以下代码即可

```csharp
    CompilationOptions options = new CompilationOptions { SourceMap = true };
    CompilationResult result = SassCompiler.CompileFile(scssFile.FullName, cssFile.FullName, mapFile.FullName, options);
```